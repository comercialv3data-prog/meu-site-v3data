import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className }: DashboardProps) => {
  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 bg-[#0A1A2F] ${className || ""}`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Veja Onde Sua Margem Está Vazando
          </h2>

          <p className="text-lg sm:text-xl text-primary-100 mb-3">
            Análise integrada de Prazo, Custo e Planejamento em tempo real
          </p>

          <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            A V3 Data conecta dados de planejamento, suprimentos e financeiro em
            um só lugar — mostrando não só os números, mas o impacto direto na
            margem, no caixa e nas decisões que precisam ser tomadas hoje.
          </p>
        </div>

        {/* PAINEL BRANCO PRINCIPAL */}
        <Card className="p-6 sm:p-8 border-none shadow-2xl bg-white rounded-2xl">
          {/* CABEÇALHO DO PAINEL */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
              <Building2 className="w-9 h-9 text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-[#0A1A2F]">
                  Gestão de Obras
                </h3>
                <p className="text-sm text-[#0A1A2F]/70">
                  Visão consolidada com foco na obra em risco
                </p>
              </div>
            </div>

            {/* DIREITA — Logo V3 Data */}
            <div className="sm:ml-auto flex items-center justify-end">
              <img
                src="/logo-v3data.png"
                alt="V3 Data"
                className="h-10 w-auto opacity-95"
              />
            </div>
          </div>

          {/* RESUMO RÁPIDO (4 CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 border bg-white rounded-xl shadow-sm">
              <p className="text-xs font-medium text-[#0A1A2F]/60 mb-1">
                Obra em foco
              </p>
              <p className="text-base font-semibold text-[#0A1A2F] mb-1">
                Residencial Primavera
              </p>
              <p className="text-xs text-[#0A1A2F]/70">
                1 obra em risco de margem neste mês
              </p>
            </Card>

            <Card className="p-4 border bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#0A1A2F]/60 mb-1">
                    IDP (Prazo)
                  </p>
                  <p className="text-3xl font-bold text-[#B91C1C]">0,62</p>
                  <p className="text-xs text-[#0A1A2F]/70 mt-1">
                    Abaixo do esperado
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-[#B91C1C]" />
              </div>
            </Card>

            <Card className="p-4 border bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#0A1A2F]/60 mb-1">
                    IDC (Custo)
                  </p>
                  <p className="text-3xl font-bold text-[#D97706]">0,91</p>
                  <p className="text-xs text-[#0A1A2F]/70 mt-1">
                    Custo acima do previsto
                  </p>
                </div>
                <TrendingDown className="w-8 h-8 text-[#D97706]" />
              </div>
            </Card>

            <Card className="p-4 border bg-white rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-[#0A1A2F]/60 mb-1">
                    Margem da obra
                  </p>
                  <p className="text-2xl font-bold text-[#B91C1C]">-4,7 p.p.</p>
                  <p className="text-xs text-[#0A1A2F]/70 mt-1">
                    Queda no mês atual
                  </p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#0A1A2F]/40" />
              </div>
            </Card>
          </div>

          {/* BLOCO ANALÍTICO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Causas da margem */}
            <Card className="p-5 border bg-white rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold text-[#0A1A2F] mb-4 flex items-center gap-2">
                Principais causas da perda de margem
              </h4>

              <div className="space-y-4 text-sm">
                {/* Suprimentos */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#0A1A2F]/80">
                      Suprimentos (material)
                    </span>
                    <span className="font-semibold text-[#B91C1C]">
                      +11% vs planejado
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#0A1A2F]/60">
                      Planejado
                    </span>
                    <Progress value={100} className="h-2 flex-1" />
                    <span className="text-[11px] text-[#0A1A2F]/60 w-10 text-right">
                      100%
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-[#0A1A2F]/60">
                      Realizado
                    </span>
                    <Progress value={111} className="h-2 flex-1" />
                    <span className="text-[11px] text-[#B91C1C] w-10 text-right">
                      111%
                    </span>
                  </div>
                </div>

                {/* Mão de obra */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#0A1A2F]/80">Mão de obra</span>
                    <span className="font-semibold text-[#B45309]">
                      +9% vs planejado
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#0A1A2F]/60">
                      Planejado
                    </span>
                    <Progress value={100} className="h-2 flex-1" />
                    <span className="text-[11px] text-[#0A1A2F]/60 w-10 text-right">
                      100%
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-[#0A1A2F]/60">
                      Realizado
                    </span>
                    <Progress value={109} className="h-2 flex-1" />
                    <span className="text-[11px] text-[#D97706] w-10 text-right">
                      109%
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Projeção de margem */}
            <Card className="p-5 border bg-white rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold text-[#0A1A2F] mb-4 flex items-center gap-2">
                Projeção de margem da Residencial Primavera
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#0A1A2F]/80">Margem atual</span>
                  <span className="font-semibold text-[#B91C1C]">
                    -4,7 p.p.
                  </span>
                </div>
                <Progress value={30} className="h-2" />

                <div className="flex items-center justify-between mt-4 mb-1">
                  <span className="text-[#0A1A2F]/80">
                    Margem projetada após ações
                  </span>
                  <span className="font-semibold text-[#16A34A]">
                    -2,6 p.p.
                  </span>
                </div>
                <Progress value={55} className="h-2" />

                <p className="text-xs text-[#0A1A2F]/70 mt-3 leading-relaxed">
                  Ajustando consumo de material, redistribuindo mão de obra e
                  atualizando o cronograma, a obra pode recuperar cerca de{" "}
                  <span className="font-semibold text-[#16A34A]">
                    2,1 pontos de margem
                  </span>{" "}
                  nos próximos dias.
                </p>
              </div>
            </Card>
          </div>

          {/* TABELA DESKTOP */}
          <div className="bg-white rounded-lg border border-[#0A1A2F]/10 hidden md:block">
            <div className="p-4 border-b border-[#0A1A2F]/10 flex items-center justify-between">
              <h4 className="font-semibold text-[#0A1A2F]">
                Projetos em Execução
              </h4>
              <span className="text-xs text-[#0A1A2F]/60">
                Foco na obra com maior risco de margem
              </span>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Projeto</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">IDP</TableHead>
                    <TableHead className="text-center">IDC</TableHead>
                    <TableHead className="text-center">
                      Margem (variação)
                    </TableHead>
                    <TableHead className="text-center">
                      Recuperação possível
                    </TableHead>
                    <TableHead className="text-right">Observação</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-[#0A1A2F]">
                      Residencial Primavera
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="destructive"
                        className="text-xs font-semibold"
                      >
                        Em risco
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-semibold text-[#B91C1C]">
                      0,62
                    </TableCell>
                    <TableCell className="text-center font-semibold text-[#D97706]">
                      0,91
                    </TableCell>
                    <TableCell className="text-center font-semibold text-[#B91C1C]">
                      -4,7 p.p.
                    </TableCell>
                    <TableCell className="text-center font-semibold text-[#16A34A]">
                      +2,1 p.p.
                    </TableCell>
                    <TableCell className="text-right text-sm text-[#0A1A2F]/70">
                      Desvios concentrados em suprimentos e mão de obra
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden mt-6 space-y-4">
            <div className="p-4 border border-[#0A1A2F]/10 rounded-xl bg-white shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-[#0A1A2F]">
                    Residencial Primavera
                  </h4>
                  <p className="text-xs text-[#0A1A2F]/60">
                    Obra em risco de margem
                  </p>
                </div>

                <Badge variant="destructive" className="text-[11px]">
                  Em risco
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mt-2">
                <div>
                  <p className="text-[#0A1A2F]/60 mb-1">IDP (prazo)</p>
                  <p className="font-semibold text-[#B91C1C]">0,62</p>
                </div>

                <div>
                  <p className="text-[#0A1A2F]/60 mb-1">IDC (custo)</p>
                  <p className="font-semibold text-[#D97706]">0,91</p>
                </div>

                <div>
                  <p className="text-[#0A1A2F]/60 mb-1">Margem (variação)</p>
                  <p className="font-semibold text-[#B91C1C]">-4,7 p.p.</p>
                </div>

                <div>
                  <p className="text-[#0A1A2F]/60 mb-1">Recuperação possível</p>
                  <p className="font-semibold text-[#16A34A]">+2,1 p.p.</p>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-[#0A1A2F]/70 leading-relaxed">
                A V3 Data indica: revisar consumo de materiais, redistribuir
                equipes e ajustar o cronograma para recuperar parte da margem
                ainda neste ciclo.
              </p>
            </div>
          </div>

          {/* LEGENDA */}
          <div className="mt-8 p-4 bg-[#F9FAFB] rounded-lg border border-[#0A1A2F]/5">
            <p className="text-sm font-semibold text-[#0A1A2F] mb-2">
              Leitura rápida dos índices:
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#0A1A2F]/80">
              <span>
                🟩 <strong>Saudável:</strong> 1,0 a 1,1
              </span>
              <span>
                🟨 <strong>Atenção:</strong> 0,9 a 1,0
              </span>
              <span>
                🟥 <strong>Crítico:</strong> abaixo de 0,9
              </span>
            </div>
          </div>

          {/* FRASE FINAL */}
          <p className="mt-8 text-center text-sm sm:text-base italic text-[#0A1A2F]/80 max-w-3xl mx-auto">
            Outros vendem software. Nós entregamos clareza. A V3 Data conecta
            dados de planejamento, suprimentos e financeiro e traduz isso em
            impacto real em margem e caixa.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
