import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 px-6 bg-[#0A1A2F] text-center">
      <div className="container mx-auto max-w-4xl">
        {/* Headline melhor enquadrada */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-white leading-snug mb-4 mx-auto">
          Pronto para entrar em 2026 com mais controle e previsibilidade nos
          seus resultados?
        </h2>

        {/* Subtítulo mais limpo e com melhor espaçamento */}
        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
          Saiba, em tempo real, como está o desempenho de cada setor da sua
          empresa — dos desvios às oportunidades, nos mínimos detalhes.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button
            size="lg"
            asChild
            className="px-8 py-5 text-lg font-semibold shadow-lg hover:scale-105 transition-all bg-white !text-[#0A1A2F] hover:bg-white/90"
          >
            <a
              href="https://wa.me/5527981035921?text=Olá!%20Quero%20agendar%20uma%20demonstração%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar demonstração gratuita
            </a>
          </Button>

          <Button
            size="lg"
            asChild
            className="px-8 py-5 text-lg font-semibold border-white shadow-lg hover:bg-white/10 backdrop-blur-sm !text-white"
          >
            <a
              href="https://wa.me/5527981035921?text=Olá!%20Quero%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um especialista
            </a>
          </Button>
        </div>

        {/* Rodapé */}
        <p className="text-white/60 text-sm">
          Dados seguros • Integração estável • Tecnologia validada por
          construtoras líderes
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
