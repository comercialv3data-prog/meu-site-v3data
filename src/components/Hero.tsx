import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-start px-6 py-16 sm:py-20 bg-[#0A1A2F]">
      <div className="container mx-auto max-w-4xl text-center">
        {/* LOGO NO TOPO */}
        <img src="/logo-v3.png" alt="V3DATA" className="h-14 mx-auto mb-8" />

        {/* Headline principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Transforme Dados <br /> em Decisões Inteligentes
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Gestão de alta performance: visão total do negócio, números na mesa e
          decisões rápidas — porque empresa que atrasa informação perde
          dinheiro.
        </p>

        {/* Vídeo */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-2xl aspect-video rounded-xl shadow-2xl overflow-hidden border-2 border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mFqQYYtqxyo"
              title="Case de Sucesso | V3 Data"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* VER CASES */}
          <Button
            size="lg"
            asChild
            className="px-8 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-all bg-white !text-[#0A1A2F] hover:bg-white/90"
          >
            <a
              href="https://wa.me/5527981035921?text=Olá!%20Quero%20ver%20os%20cases%20realizados%20pela%20V3%20Data."
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Cases Realizados
            </a>
          </Button>

          {/* MARCAR REUNIÃO */}
          <Button
            size="lg"
            asChild
            className="px-8 py-6 text-lg font-semibold border-white shadow-lg hover:bg-white/10 backdrop-blur-sm !text-white"
          >
            <a
              href="https://wa.me/5527981035921?text=Olá!%20Quero%20marcar%20uma%20reunião%20com%20a%20V3%20Data."
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Marcar uma Reunião
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
