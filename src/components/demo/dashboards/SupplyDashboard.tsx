import { Package, TrendingDown, Clock, AlertTriangle } from "lucide-react";
import { MetricCard } from "../MetricCard";
import { AlertBox } from "../AlertBox";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const fluxoMensal = [
  { mes: "Jan", pedidos: 145, cotacoes: 132, ordens: 128 },
  { mes: "Fev", pedidos: 158, cotacoes: 148, ordens: 142 },
  { mes: "Mar", pedidos: 172, cotacoes: 165, ordens: 158 },
  { mes: "Abr", pedidos: 163, cotacoes: 155, ordens: 148 },
  { mes: "Mai", pedidos: 178, cotacoes: 170, ordens: 165 },
  { mes: "Jun", pedidos: 185, cotacoes: 178, ordens: 172 },
];

const savingData = [
  { mes: "Jan", saving: 8.2 },
  { mes: "Fev", saving: 9.5 },
  { mes: "Mar", saving: 11.3 },
  { mes: "Abr", saving: 10.8 },
  { mes: "Mai", saving: 12.1 },
  { mes: "Jun", saving: 11.7 },
];

const fornecedorData = [
  { fornecedor: "Fornecedor Alpha", pedidos: 85, valor: 1250000, prazo: 12, atrasos: 5, saving: 12.5, avaliacao: "excelente" },
  { fornecedor: "Fornecedor Beta", pedidos: 62, valor: 980000, prazo: 15, atrasos: 8, saving: 9.8, avaliacao: "bom" },
  { fornecedor: "Fornecedor Gamma", pedidos: 48, valor: 720000, prazo: 18, atrasos: 12, saving: 7.2, avaliacao: "regular" },
  { fornecedor: "Fornecedor Delta", pedidos: 35, valor: 450000, prazo: 22, atrasos: 18, saving: 4.5, avaliacao: "crítico" },
];

const compraPorObra = [
  { obra: "Residencial SP", valor: 1850000 },
  { obra: "Industrial MG", valor: 1420000 },
  { obra: "Comercial RJ", valor: 980000 },
  { obra: "Shopping BA", valor: 750000 },
];

const compraPorCategoria = [
  { name: "Materiais de Construção", value: 2800000 },
  { name: "Equipamentos", value: 1200000 },
  { name: "Serviços", value: 800000 },
  { name: "Outros", value: 200000 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

export const SupplyDashboard = () => {
  const pedidosSolicitados = 185;
  const pedidosCotados = 178;
  const savingMedio = 11.7;
  const taxaAtrasos = 8.5;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Pedidos Solicitados"
          value={pedidosSolicitados}
          icon={Package}
          trend={{ value: "+12 vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Pedidos Cotados"
          value={`${pedidosCotados} (${((pedidosCotados/pedidosSolicitados)*100).toFixed(0)}%)`}
          icon={TrendingDown}
        />
        <MetricCard
          title="Saving Médio"
          value={`${savingMedio}%`}
          icon={TrendingDown}
          trend={{ value: "+1.2% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Taxa de Atrasos"
          value={`${taxaAtrasos}%`}
          icon={AlertTriangle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Fluxo de Compras - Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fluxoMensal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pedidos" fill="#3b82f6" name="Pedidos Solicitados" />
              <Bar dataKey="cotacoes" fill="#8b5cf6" name="Pedidos Cotados" />
              <Bar dataKey="ordens" fill="#10b981" name="Ordens Emitidas" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Evolução do Saving (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={savingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Line type="monotone" dataKey="saving" stroke="#10b981" strokeWidth={3} name="Saving %" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance de Fornecedores</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Prazo Médio (dias)</TableHead>
                <TableHead>Atrasos (%)</TableHead>
                <TableHead>Saving (%)</TableHead>
                <TableHead>Avaliação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fornecedorData.map((fornecedor) => (
                <TableRow key={fornecedor.fornecedor}>
                  <TableCell className="font-medium">{fornecedor.fornecedor}</TableCell>
                  <TableCell>{fornecedor.pedidos}</TableCell>
                  <TableCell>R$ {(fornecedor.valor / 1000000).toFixed(2)}M</TableCell>
                  <TableCell>{fornecedor.prazo} dias</TableCell>
                  <TableCell>
                    <span className={fornecedor.atrasos > 10 ? "text-red-600 font-semibold" : "text-green-600"}>
                      {fornecedor.atrasos}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={fornecedor.saving > 10 ? "text-green-600 font-semibold" : "text-orange-600"}>
                      {fornecedor.saving}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      fornecedor.avaliacao === "excelente" ? "bg-green-100 text-green-800" :
                      fornecedor.avaliacao === "bom" ? "bg-blue-100 text-blue-800" :
                      fornecedor.avaliacao === "regular" ? "bg-orange-100 text-orange-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {fornecedor.avaliacao.charAt(0).toUpperCase() + fornecedor.avaliacao.slice(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Volume de Compras por Obra</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={compraPorObra} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="obra" type="category" width={120} />
              <Tooltip formatter={(value) => `R$ ${(Number(value) / 1000000).toFixed(2)}M`} />
              <Bar dataKey="valor" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Compras por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={compraPorCategoria}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {compraPorCategoria.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `R$ ${(Number(value) / 1000000).toFixed(2)}M`} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <AlertBox
        title="⚠️ Alertas e Ações"
        type="warning"
        alerts={[
          "15 pedidos urgentes sem cotação - Priorizar imediatamente",
          "Fornecedor Delta apresenta 18% de atraso - Considerar substituição",
          "Obra Residencial SP está com 8 pedidos acima do orçamento",
          "Saving da categoria 'Materiais de Construção' caiu 2.5% no último mês - Renegociar contratos",
          "23 pedidos aguardando aprovação há mais de 5 dias"
        ]}
      />
    </div>
  );
};
