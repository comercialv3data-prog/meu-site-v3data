import { DollarSign, TrendingUp, TrendingDown, Percent } from "lucide-react";
import { MetricCard } from "../MetricCard";
import { AlertBox } from "../AlertBox";
import { StatusBadge } from "../StatusBadge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const monthlyData = [
  { month: "Jan", receita: 850000, custo: 620000, margem: 230000 },
  { month: "Fev", receita: 920000, custo: 680000, margem: 240000 },
  { month: "Mar", receita: 1100000, custo: 810000, margem: 290000 },
  { month: "Abr", receita: 980000, custo: 720000, margem: 260000 },
  { month: "Mai", receita: 1050000, custo: 780000, margem: 270000 },
  { month: "Jun", receita: 1200000, custo: 890000, margem: 310000 },
];

const obraData = [
  { obra: "Residencial SP", receita: 2500000, custos: 1850000, margemBruta: 650000, despesasGA: 125000, margemLiquida: 525000, percentual: 21.0, status: "excelente" },
  { obra: "Comercial RJ", receita: 1800000, custos: 1350000, margemBruta: 450000, despesasGA: 90000, margemLiquida: 360000, percentual: 20.0, status: "bom" },
  { obra: "Industrial MG", receita: 3200000, custos: 2600000, margemBruta: 600000, despesasGA: 160000, margemLiquida: 440000, percentual: 13.8, status: "atenção" },
  { obra: "Shopping BA", receita: 1500000, custos: 1280000, margemBruta: 220000, despesasGA: 75000, margemLiquida: 145000, percentual: 9.7, status: "crítico" },
];

const receitaPorObra = [
  { obra: "Residencial SP", valor: 2500000 },
  { obra: "Comercial RJ", valor: 1800000 },
  { obra: "Industrial MG", valor: 3200000 },
  { obra: "Shopping BA", valor: 1500000 },
];

export const FinancialDashboard = () => {
  const totalReceita = obraData.reduce((sum, obra) => sum + obra.receita, 0);
  const totalCustos = obraData.reduce((sum, obra) => sum + obra.custos, 0);
  const totalMargem = totalReceita - totalCustos;
  const percentualMargem = ((totalMargem / totalReceita) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Receita Total"
          value={`R$ ${(totalReceita / 1000000).toFixed(1)}M`}
          icon={DollarSign}
          trend={{ value: "+12.5% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Custos Diretos"
          value={`R$ ${(totalCustos / 1000000).toFixed(1)}M`}
          icon={TrendingDown}
        />
        <MetricCard
          title="Margem Líquida"
          value={`R$ ${(totalMargem / 1000000).toFixed(2)}M`}
          icon={TrendingUp}
          trend={{ value: "+8.3% vs mês anterior", isPositive: true }}
        />
        <MetricCard
          title="Margem Líquida %"
          value={`${percentualMargem}%`}
          icon={Percent}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Evolução Mensal - 2024</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${(Number(value) / 1000).toFixed(0)}k`} />
              <Legend />
              <Line type="monotone" dataKey="receita" stroke="#3b82f6" strokeWidth={2} name="Receita" />
              <Line type="monotone" dataKey="custo" stroke="#ef4444" strokeWidth={2} name="Custo" />
              <Line type="monotone" dataKey="margem" stroke="#10b981" strokeWidth={2} name="Margem" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Receita por Obra</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={receitaPorObra} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="obra" type="category" width={100} />
              <Tooltip formatter={(value) => `R$ ${(Number(value) / 1000000).toFixed(1)}M`} />
              <Bar dataKey="valor" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Análise Detalhada por Obra</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Obra</TableHead>
                <TableHead>Receita</TableHead>
                <TableHead>Custos Diretos</TableHead>
                <TableHead>Margem Bruta</TableHead>
                <TableHead>Despesas G&A</TableHead>
                <TableHead>Margem Líquida</TableHead>
                <TableHead>% Margem</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {obraData.map((obra) => (
                <TableRow key={obra.obra}>
                  <TableCell className="font-medium">{obra.obra}</TableCell>
                  <TableCell>R$ {(obra.receita / 1000000).toFixed(2)}M</TableCell>
                  <TableCell>R$ {(obra.custos / 1000000).toFixed(2)}M</TableCell>
                  <TableCell>R$ {(obra.margemBruta / 1000000).toFixed(2)}M</TableCell>
                  <TableCell>R$ {(obra.despesasGA / 1000).toFixed(0)}k</TableCell>
                  <TableCell className="font-semibold">R$ {(obra.margemLiquida / 1000000).toFixed(2)}M</TableCell>
                  <TableCell>{obra.percentual}%</TableCell>
                  <TableCell>
                    <StatusBadge status={obra.status as any} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <AlertBox
        title="⚠️ Alertas e Recomendações"
        type="warning"
        alerts={[
          "Obra Shopping BA está com margem líquida abaixo de 10% - Recomenda-se revisão urgente de custos",
          "Obra Industrial MG apresentou aumento de 8% nos custos diretos no último mês",
          "Despesas G&A da Obra Residencial SP subiram 15% acima do orçado",
          "Oportunidade: Negociar melhores condições com fornecedores principais para reduzir custos em 5-7%"
        ]}
      />
    </div>
  );
};
