import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    traditional: "Dados dispersos",
    v3data: "Dados conectados automaticamente",
  },
  { traditional: "Descoberta tardia", v3data: "Alertas imediatos via IA" },
  { traditional: "Decisão lenta", v3data: "Decisão proativa com insights" },
  { traditional: "Visão limitada", v3data: "Visão 360° com IA preditiva" },
];

const Comparison = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Gestão Tradicional vs V3DATA
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda, de forma clara, o que muda na sua operação.
          </p>
        </div>

        {/* Comparação lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna 1 – Tradicional */}
          <Card className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Gestão Tradicional
            </h3>

            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-muted-foreground text-lg"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  {item.traditional}
                </li>
              ))}
            </ul>
          </Card>

          {/* Coluna 2 – V3DATA */}
          <Card className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-bold text-success mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Gestão com V3DATA
            </h3>

            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <li key={i} className="flex gap-3 text-foreground text-lg">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-semibold">{item.v3data}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
