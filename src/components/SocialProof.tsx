import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Building2 } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    number: "4% a 11%",
    text: "Aumento real no lucro líquido dos clientes",
  },
  {
    icon: Building2,
    number: "230+",
    text: "Obras Monitoradas",
  },
  {
    icon: Zap,
    number: "98%",
    text: "Precisão dos alertas da IA",
  },
];

const testimonials = [
  {
    quote:
      "Entendemos que, sozinhos, não alcançaríamos a qualidade e a velocidade de entrega que a V3 garante em dashboards e visualizações integradas.",
    author: "Estefany Castro",
    role: "Head de Inovação e Estratégia",
    company: "Fortes Engenharia",
  },
  {
    quote:
      "A V3 transformou nossos indicadores em resultados. Ganhamos controle, previsibilidade e uma visão que nunca tivemos.",
    author: "Mateus Oliveira",
    role: "CEO",
    company: "Private Construtora",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Título sem animações */}
        <div className="text-center mb-12">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-extrabold text-[#0A1A2F] mb-4
              !animate-none !transition-none
            "
          >
            A Prova Está nos Resultados
          </h2>

          <p className="text-lg text-[#0A1A2F]/70 max-w-3xl mx-auto">
            Operações mais eficientes, menos desvios e aumento direto no lucro
            líquido.
          </p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <Card
                key={i}
                className="p-8 text-center border border-[#0A1A2F]/10 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#0A1A2F]/10 rounded-xl">
                  <Icon className="w-8 h-8 text-[#0A1A2F]" />
                </div>

                <div className="text-4xl font-bold text-[#0A1A2F] mb-2">
                  {metric.number}
                </div>

                <p className="text-[#0A1A2F]/70 text-lg">{metric.text}</p>
              </Card>
            );
          })}
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="p-8 border border-[#0A1A2F]/10 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all"
            >
              <p className="text-lg text-[#0A1A2F]/90 italic mb-6">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-[#0A1A2F]/10">
                <p className="font-bold text-[#0A1A2F]">{t.author}</p>
                <p className="text-[#0A1A2F]/70 text-sm">
                  {t.role}, {t.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
