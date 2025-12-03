import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Direção Clara Todos os Dias",
    description:
      "O gestor sabe exatamente o que priorizar — com alertas e insights objetivos.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Mensal Comprovada",
    description:
      "Indicadores conectados mostram avanço real mês a mês, sem achismo.",
  },
  {
    icon: Sparkles,
    title: "Decisões Rápidas e Estratégicas",
    description:
      "A IA antecipa cenários, reduz ruídos entre equipes e libera até 8h semanais do gestor.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1A2F] mb-4">
            Por Que Nossos Clientes Batem Suas Metas
          </h2>
          <p className="text-lg sm:text-xl text-[#0A1A2F]/70 max-w-3xl mx-auto">
            A união perfeita entre tecnologia e estratégia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center rounded-2xl border border-[#0A1A2F]/10 bg-white shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#0A1A2F]/10 flex items-center justify-center backdrop-blur-sm">
                  <Icon className="w-10 h-10 text-[#0A1A2F]" />
                </div>

                <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-[#0A1A2F]/70 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
