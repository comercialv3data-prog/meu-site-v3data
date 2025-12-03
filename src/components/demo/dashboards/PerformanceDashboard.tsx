import { Activity, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { MetricCard } from "../MetricCard";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts";

const performanceData = [
  { obra: "Residencial SP", idc: 1.05, idp: 0.98, avFisico: 68, avFinanceiro: 70, desvio: -2.1, status: "bom" },
  { obra: "Comercial RJ", idc: 1.12, idp: 1.05, avFisico: 82, avFinanceiro: 85, desvio: 1.2, status: "excelente" },
  { obra: "Industrial MG", idc: 0.92, idp: 0.88, avFisico: 45, avFinanceiro: 42, desvio: -5.8, status: "atenção" },
  { obra: "Shopping BA", idc: 0.85, idp: 0.82, avFisico: 38, avFinanceiro: 35, desvio: -8.2, status: "crítico" },
  { obra: "Corporativo ES", idc: 1.08, idp: 1.02, avFisico: 75, avFinanceiro: 78, desvio: 0.8, status: "bom" },
];

const scatterData = performanceData.map(obra => ({
  x: obra.idc,
  y: obra.idp,
  z: 200,
  name: obra.obra,
  status: obra.status
}));

const getStatusColor = (status: string) => {
  switch (status) {
    case "excelente": return "#10b981";
    case "bom": return "#3b82f6";
    case "atenção": return "#f59e0b";
    case "crítico": return "#ef4444";
    default: return "#6b7280";
  }
};

export const PerformanceDashboard = () => {
  const avgIDC = (performanceData.reduce((sum, d) => sum + d.idc, 0) / performanceData.length).toFixed(2);
  const avgIDP = (performanceData.reduce((sum, d) => sum + d.idp, 0) / performanceData.length).toFixed(2);
  const avgAvFisico = Math.round(performanceData.reduce((sum, d) => sum + d.avFisico, 0) / performanceData.length);
  const obrasEmAlerta = performanceData.filter(d => d.status === "atenção" || d.status === "crítico").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="IDC Médio"
          value={avgIDC}
          icon={Activity}
          trend={{ value: avgIDC > "1.00" ? "Acima da meta" : "Abaixo da meta", isPositive: avgIDC > "1.00" }}
        />
        <MetricCard
          title="IDP Médio"
          value={avgIDP}
          icon={Clock}
          trend={{ value: avgIDP > "1.00" ? "Dentro do prazo" : "Com atraso", isPositive: avgIDP > "1.00" }}
        />
        <MetricCard
          title="Avanço Físico Médio"
          value={`${avgAvFisico}%`}
          icon={TrendingUp}
        />
        <MetricCard
          title="Obras em Alerta"
          value={obrasEmAlerta}
          icon={AlertTriangle}
        />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Indicadores Consolidados por Obra</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Obra</TableHead>
                <TableHead>IDC</TableHead>
                <TableHead>IDP</TableHead>
                <TableHead>Avanço Físico</TableHead>
                <TableHead>Avanço Financeiro</TableHead>
                <TableHead>Desvio Acumulado</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceData.map((obra) => (
                <TableRow key={obra.obra}>
                  <TableCell className="font-medium">{obra.obra}</TableCell>
                  <TableCell>
                    <span className={obra.idc >= 1.0 ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                      {obra.idc.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={obra.idp >= 1.0 ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                      {obra.idp.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={obra.avFisico} className="w-20" />
                      <span className="text-sm">{obra.avFisico}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={obra.avFinanceiro} className="w-20" />
                      <span className="text-sm">{obra.avFinanceiro}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={obra.desvio >= 0 ? "text-green-600" : "text-red-600"}>
                      {obra.desvio > 0 ? "+" : ""}{obra.desvio}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      obra.status === "excelente" ? "bg-green-100 text-green-800" :
                      obra.status === "bom" ? "bg-blue-100 text-blue-800" :
                      obra.status === "atenção" ? "bg-orange-100 text-orange-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {obra.status.charAt(0).toUpperCase() + obra.status.slice(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Matriz IDC x IDP</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="IDC" domain={[0.7, 1.2]} label={{ value: 'IDC', position: 'bottom' }} />
              <YAxis type="number" dataKey="y" name="IDP" domain={[0.7, 1.2]} label={{ value: 'IDP', angle: -90, position: 'left' }} />
              <ZAxis type="number" dataKey="z" range={[100, 400]} />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border rounded shadow-lg">
                        <p className="font-semibold">{data.name}</p>
                        <p className="text-sm">IDC: {data.x.toFixed(2)}</p>
                        <p className="text-sm">IDP: {data.y.toFixed(2)}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              {scatterData.map((entry, index) => (
                <Scatter
                  key={`scatter-${index}`}
                  data={[entry]}
                  fill={getStatusColor(entry.status)}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm">Excelente</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm">Bom</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm">Atenção</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm">Crítico</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Entendendo os Indicadores</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-blue-600 mb-1">IDC - Índice de Desempenho de Custos</p>
              <p className="text-gray-600">IDC = Custo Orçado / Custo Real</p>
              <p className="text-xs text-gray-500 mt-1">IDC &gt; 1.0: Abaixo do orçado (bom)</p>
              <p className="text-xs text-gray-500">IDC &lt; 1.0: Acima do orçado (ruim)</p>
            </div>
            <div>
              <p className="font-semibold text-green-600 mb-1">IDP - Índice de Desempenho de Prazos</p>
              <p className="text-gray-600">IDP = Prazo Planejado / Prazo Real</p>
              <p className="text-xs text-gray-500 mt-1">IDP &gt; 1.0: Adiantado (bom)</p>
              <p className="text-xs text-gray-500">IDP &lt; 1.0: Atrasado (ruim)</p>
            </div>
            <div>
              <p className="font-semibold text-purple-600 mb-1">Avanço Físico</p>
              <p className="text-gray-600">Percentual de execução física da obra em relação ao planejado</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600 mb-1">Avanço Financeiro</p>
              <p className="text-gray-600">Percentual do orçamento executado em relação ao total</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
