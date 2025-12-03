import { Card } from "@/components/ui/card";
import { Grid, Search, Zap } from "lucide-react";

const steps = [
  {
    icon: Grid,
    title: "1. Conectamos seus sistemas",
    description:
      "Integramos ERP, planilhas e dados de obra em um único ambiente — sem alterar seus processos atuais.",
  },
  {
    icon: Search,
    title: "2. IA monitora tudo 24/7",
    description:
      "A inteligência cruza planejamento, suprimentos e financeiro e identifica desvios antes de virarem problema.",
  },
  {
    icon: Zap,
    title: "3. Você recebe o que importa",
    description:
      "Alertas e recomendações no WhatsApp com foco no que realmente afeta margem e fluxo de caixa.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#0A1A2F] mb-6">
          Como Funciona na Prática
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-lg sm:text-xl text-[#0A1A2F]/70 mb-14 max-w-2xl mx-auto">
          Do dado bruto à ação concreta, em três passos simples.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Card
                key={i}
                className="p-8 text-center rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                {/* Ícone */}
                <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Título */}
                <h3 className="font-semibold text-xl text-[#0A1A2F] mb-3">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-[#0A1A2F]/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
