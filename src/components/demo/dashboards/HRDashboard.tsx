import { Users, TrendingUp, AlertCircle, DollarSign } from "lucide-react";
import { MetricCard } from "../MetricCard";
import { AlertBox } from "../AlertBox";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const monthlyTrend = [
  { month: "Jan", turnover: 3.2, absenteismo: 2.8 },
  { month: "Fev", turnover: 2.9, absenteismo: 3.1 },
  { month: "Mar", turnover: 3.5, absenteismo: 2.5 },
  { month: "Abr", turnover: 4.1, absenteismo: 3.8 },
  { month: "Mai", turnover: 3.8, absenteismo: 3.2 },
  { month: "Jun", turnover: 3.6, absenteismo: 2.9 },
];

const obraData = [
  { obra: "Residencial SP", funcionarios: 120, turnover: 2.5, absenteismo: 2.1, custoPorM2: 85, status: "bom" },
  { obra: "Comercial RJ", funcionarios: 85, turnover: 3.2, absenteismo: 2.8, custoPorM2: 92, status: "bom" },
  { obra: "Industrial MG", funcionarios: 150, turnover: 4.8, absenteismo: 4.2, custoPorM2: 78, status: "atenção" },
  { obra: "Shopping BA", funcionarios: 95, turnover: 5.5, absenteismo: 5.1, custoPorM2: 105, status: "crítico" },
];

const empresaData = [
  { empresa: "RS Construções (Matriz)", funcionarios: 280, turnover: 2.8, absenteismo: 2.5 },
  { empresa: "Terceirizada Alpha", funcionarios: 120, turnover: 4.2, absenteismo: 3.8 },
  { empresa: "Terceirizada Beta", funcionarios: 50, turnover: 5.8, absenteismo: 4.5 },
];

const comparativoEmpresas = empresaData.map(e => ({
  empresa: e.empresa.split(' ')[0] + (e.empresa.includes('Terceirizada') ? ' ' + e.empresa.split(' ')[1] : ''),
  turnover: e.turnover,
  absenteismo: e.absenteismo
}));

export const HRDashboard = () => {
  const totalFuncionarios = obraData.reduce((sum, d) => sum + d.funcionarios, 0);
  const avgTurnover = (obraData.reduce((sum, d) => sum + d.turnover, 0) / obraData.length).toFixed(1);
  const avgAbsenteismo = (obraData.reduce((sum, d) => sum + d.absenteismo, 0) / obraData.length).toFixed(1);
  const avgCustoM2 = Math.round(obraData.reduce((sum, d) => sum + d.custoPorM2, 0) / obraData.length);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total de Funcionários"
          value={totalFuncionarios}
          icon={Users}
          trend={{ value: "+8 vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Turnover Médio"
          value={`${avgTurnover}%`}
          icon={TrendingUp}
          trend={{ value: "-0.3% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Absenteísmo Médio"
          value={`${avgAbsenteismo}%`}
          icon={AlertCircle}
        />
        <MetricCard
          title="Custo/m² Médio"
          value={`R$ ${avgCustoM2}`}
          icon={DollarSign}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Tendência Mensal - 2024</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Line type="monotone" dataKey="turnover" stroke="#ef4444" strokeWidth={2} name="Turnover %" />
              <Line type="monotone" dataKey="absenteismo" stroke="#f59e0b" strokeWidth={2} name="Absenteísmo %" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Comparativo por Empresa</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparativoEmpresas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="empresa" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="turnover" fill="#ef4444" name="Turnover %" />
              <Bar dataKey="absenteismo" fill="#f59e0b" name="Absenteísmo %" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Indicadores por Obra</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Obra</TableHead>
                <TableHead>Funcionários</TableHead>
                <TableHead>Turnover %</TableHead>
                <TableHead>Absenteísmo %</TableHead>
                <TableHead>Custo/m²</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {obraData.map((obra) => (
                <TableRow key={obra.obra}>
                  <TableCell className="font-medium">{obra.obra}</TableCell>
                  <TableCell>{obra.funcionarios}</TableCell>
                  <TableCell>
                    <span className={obra.turnover > 4.0 ? "text-red-600 font-semibold" : "text-green-600"}>
                      {obra.turnover}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={obra.absenteismo > 4.0 ? "text-red-600 font-semibold" : "text-green-600"}>
                      {obra.absenteismo}%
                    </span>
                  </TableCell>
                  <TableCell>R$ {obra.custoPorM2}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      obra.status === "bom" ? "bg-green-100 text-green-800" :
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

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Comparativo entre Empresas</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Funcionários</TableHead>
                <TableHead>Turnover %</TableHead>
                <TableHead>Absenteísmo %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {empresaData.map((empresa) => (
                <TableRow key={empresa.empresa}>
                  <TableCell className="font-medium">{empresa.empresa}</TableCell>
                  <TableCell>{empresa.funcionarios}</TableCell>
                  <TableCell>
                    <span className={empresa.turnover > 4.0 ? "text-red-600 font-semibold" : "text-green-600"}>
                      {empresa.turnover}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={empresa.absenteismo > 4.0 ? "text-red-600 font-semibold" : "text-green-600"}>
                      {empresa.absenteismo}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <AlertBox
        title="🚨 Alertas Críticos"
        type="critical"
        alerts={[
          "Obra Shopping BA está com turnover de 5.5% - 87% acima da meta de 3%. Ação urgente necessária!",
          "Absenteísmo da Obra Shopping BA atingiu 5.1% - Investigar causas e implementar plano de ação",
          "Terceirizada Beta apresenta turnover de 5.8% - Avaliar substituição do fornecedor",
          "Obra Industrial MG teve aumento de 1.2% no absenteísmo no último mês",
          "Custo/m² da Obra Shopping BA está 23% acima da média - Revisar estrutura de pessoal"
        ]}
      />
    </div>
  );
};
