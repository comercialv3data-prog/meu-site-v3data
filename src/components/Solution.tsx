import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Target, Shield, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  recommended?: boolean;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Ações Inteligentes",
    description:
      "Alertas acionáveis no WhatsApp com o que realmente exige sua atenção.",
    recommended: true,
  },
  {
    icon: Brain,
    title: "IA como analista sênior",
    description:
      "Inteligência de dados 24/7 cruzando produtividade, custo e prazo.",
  },
  {
    icon: Target,
    title: "Direcionamento projetado",
    description:
      "Decisões baseadas em dados reais e projeções de impacto em lucro e caixa.",
  },
  {
    icon: Shield,
    title: "Gestão sob controle",
    description:
      "Visão 360° de obras, setores e indicadores financeiros em um único lugar.",
  },
];

const Solution = () => {
  return (
    <section className="py-20 px-4 bg-[#0F2747]">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Dashboard Inteligente + IA
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Não é mais um sistema. É uma camada de inteligência que conecta seus
            dados e traduz números em ações claras.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:shadow-2xl transition-all"
              >
                {feature.recommended && (
                  <Badge className="absolute top-4 right-4 bg-white text-[#0F2747] text-xs">
                    Destaque
                  </Badge>
                )}

                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
