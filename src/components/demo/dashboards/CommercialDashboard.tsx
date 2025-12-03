import { Users, ShoppingCart, TrendingUp, DollarSign } from "lucide-react";
import { MetricCard } from "../MetricCard";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const funnelData = [
  { stage: "Leads", quantidade: 850, conversao: 100 },
  { stage: "Oportunidades", quantidade: 420, conversao: 49.4 },
  { stage: "Propostas", quantidade: 180, conversao: 21.2 },
  { stage: "Vendas", quantidade: 68, conversao: 8.0 },
];

const canalData = [
  { canal: "Google Ads", gasto: 45000, leads: 320, vendas: 28, taxaConv: 8.8, custoLead: 141, custoVenda: 1607, roi: 3.2 },
  { canal: "Meta Ads", gasto: 38000, leads: 280, vendas: 22, taxaConv: 7.9, custoLead: 136, custoVenda: 1727, roi: 2.8 },
  { canal: "SEO Orgânico", gasto: 12000, leads: 150, vendas: 12, taxaConv: 8.0, custoLead: 80, custoVenda: 1000, roi: 4.5 },
  { canal: "Indicações", gasto: 5000, leads: 100, vendas: 6, taxaConv: 6.0, custoLead: 50, custoVenda: 833, roi: 5.2 },
];

const vendasProjetadas = [
  { mes: "Jan", projetado: 12, realizado: 11 },
  { mes: "Fev", projetado: 14, realizado: 13 },
  { mes: "Mar", projetado: 15, realizado: 16 },
  { mes: "Abr", projetado: 13, realizado: 12 },
  { mes: "Mai", projetado: 16, realizado: 14 },
  { mes: "Jun", projetado: 18, realizado: 17 },
];

const leadsPorCanal = [
  { name: "Google Ads", value: 320 },
  { name: "Meta Ads", value: 280 },
  { name: "SEO", value: 150 },
  { name: "Indicações", value: 100 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

export const CommercialDashboard = () => {
  const totalLeads = 850;
  const totalVendas = 68;
  const taxaConversao = ((totalVendas / totalLeads) * 100).toFixed(1);
  const ticketMedio = 425000;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total de Leads"
          value={totalLeads}
          icon={Users}
          trend={{ value: "+15.2% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Vendas Realizadas"
          value={totalVendas}
          icon={ShoppingCart}
          trend={{ value: "+8.5% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Taxa de Conversão"
          value={`${taxaConversao}%`}
          icon={TrendingUp}
        />
        <MetricCard
          title="Ticket Médio"
          value={`R$ ${(ticketMedio / 1000).toFixed(0)}k`}
          icon={DollarSign}
        />
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Funil de Vendas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" width={120} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 border rounded shadow-lg">
                      <p className="font-semibold">{data.stage}</p>
                      <p className="text-sm">Quantidade: {data.quantidade}</p>
                      <p className="text-sm">Conversão: {data.conversao}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="quantidade" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {funnelData.map((item, index) => (
            <div key={item.stage} className="text-center">
              <p className="text-2xl font-bold text-blue-600">{item.quantidade}</p>
              <p className="text-sm text-gray-600">{item.stage}</p>
              {index < funnelData.length - 1 && (
                <p className="text-xs text-gray-500 mt-1">→ {funnelData[index + 1].conversao}%</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance por Canal de Marketing</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Canal</TableHead>
                <TableHead>Gasto</TableHead>
                <TableHead>Leads Gerados</TableHead>
                <TableHead>Vendas</TableHead>
                <TableHead>Taxa Conv.</TableHead>
                <TableHead>Custo/Lead</TableHead>
                <TableHead>Custo/Venda</TableHead>
                <TableHead>ROI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {canalData.map((canal) => (
                <TableRow key={canal.canal}>
                  <TableCell className="font-medium">{canal.canal}</TableCell>
                  <TableCell>R$ {(canal.gasto / 1000).toFixed(0)}k</TableCell>
                  <TableCell>{canal.leads}</TableCell>
                  <TableCell className="font-semibold">{canal.vendas}</TableCell>
                  <TableCell>{canal.taxaConv}%</TableCell>
                  <TableCell>R$ {canal.custoLead}</TableCell>
                  <TableCell>R$ {canal.custoVenda}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      canal.roi >= 4.0 ? "bg-green-100 text-green-800" :
                      canal.roi >= 3.0 ? "bg-blue-100 text-blue-800" :
                      "bg-orange-100 text-orange-800"
                    }`}>
                      {canal.roi.toFixed(1)}x
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
          <h3 className="text-lg font-semibold mb-4">Vendas: Projetado vs Realizado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vendasProjetadas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="projetado" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="Projetado" />
              <Line type="monotone" dataKey="realizado" stroke="#3b82f6" strokeWidth={2} name="Realizado" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Leads por Canal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadsPorCanal}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {leadsPorCanal.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Projeção de Vendas Futuras (Próximos 3 Meses)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-sm text-red-600 mb-2">Pior Cenário</p>
            <p className="text-3xl font-bold text-red-700">38 vendas</p>
            <p className="text-sm text-red-600 mt-2">R$ 16.2M em receita</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-sm text-blue-600 mb-2">Cenário Médio</p>
            <p className="text-3xl font-bold text-blue-700">52 vendas</p>
            <p className="text-sm text-blue-600 mt-2">R$ 22.1M em receita</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-sm text-green-600 mb-2">Melhor Cenário</p>
            <p className="text-3xl font-bold text-green-700">68 vendas</p>
            <p className="text-sm text-green-600 mt-2">R$ 28.9M em receita</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Baseado em histórico de conversão dos últimos 6 meses e pipeline atual
        </p>
      </Card>
    </div>
  );
};
