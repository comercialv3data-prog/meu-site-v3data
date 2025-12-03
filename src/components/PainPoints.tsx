import { Card } from "@/components/ui/card";
import { Database, Clock, TrendingDown, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: Database,
    title: "Dados fragmentados",
    description:
      "Informações espalhadas em ERP, planilhas e relatórios manuais.",
  },
  {
    icon: Clock,
    title: "Decisão lenta",
    description: "Muito tempo gasto buscando, validando e cruzando dados.",
  },
  {
    icon: TrendingDown,
    title: "Margem invisível",
    description:
      "Dificuldade para enxergar onde a empresa realmente perde dinheiro.",
  },
  {
    icon: AlertTriangle,
    title: "Reação tardia",
    description:
      "Problemas descobertos tarde demais, quando já impactaram o caixa.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 px-4 bg-[#0F2747]">
      <div className="container mx-auto max-w-5xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Os 4 Grandes Inimigos da Margem
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A maioria das empresas perde entre 4% e 11% do lucro líquido por
            falta de visibilidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((p, i) => {
            const Icon = p.icon;

            return (
              <Card
                key={i}
                className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 shadow-xl backdrop-blur-sm hover:bg-white/[0.08] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {p.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
