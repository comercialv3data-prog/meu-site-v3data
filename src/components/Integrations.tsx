import { Card } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";

/* LOGOS */
import fortes from "@/assets/logo-fortes.png";
import privateLogo from "@/assets/logo-private.png";
import cbl from "@/assets/logo-cbl.png";
import mivita from "@/assets/logo-mivita.png";
import bloque from "@/assets/logo-bloque.png";

/* INTEGRAÇÕES */
const integrations = [
  {
    title: "ERPs de Construção",
    items: ["TOTVS RM", "Sienge", "Mega", "SAP"],
    highlight: "Integração certificada e automatizada",
  },
  {
    title: "Planilhas e Excel",
    items: ["Bi-direcional", "Atualização automática", "Sem retrabalho"],
    highlight: "Sincronização garantida",
  },
  {
    title: "Financeiro & Bancos",
    items: ["Contas", "Fluxo de Caixa", "Pagamentos", "Recebíveis"],
    highlight: "Tudo conectado ao DRE",
  },
  {
    title: "Suprimentos",
    items: ["Cotações", "Compras", "Pedidos", "Entrega"],
    highlight: "Acompanhamento em tempo real",
  },
  {
    title: "Gestão de Obras",
    items: ["Planejamento", "Cronograma", "Medições", "Produtividade"],
    highlight: "Dados cruzados com custo real",
  },
];

/* LOGOS DO CARROSSEL */
const clientLogos = [
  { src: fortes, alt: "Fortes Engenharia" },
  { src: privateLogo, alt: "Private Construtora" },
  { src: cbl, alt: "CBL Lotes" },
  { src: mivita, alt: "Mivita Construtora" },
  { src: bloque, alt: "Bloque Engenharia" },
];

const Integrations = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* TÍTULO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Conecta com Seus Sistemas.
            <br />
            Sem Complicação.
          </h2>

          <p className="text-muted-foreground text-lg sm:text-xl mt-3 max-w-3xl mx-auto">
            Integração rápida com ERPs, planilhas, financeiro, suprimentos e
            gestão de obras — tudo funcionando em horas, não em semanas.
          </p>
        </div>

        {/* CARDS DE INTEGRAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {integrations.map((int, i) => (
            <Card
              key={i}
              className="p-6 shadow-sm hover:shadow-md transition-all rounded-xl border bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
                  <LinkIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {int.title}
                </h3>
              </div>

              <ul className="space-y-1 mb-3 pl-1">
                {int.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    • {item}
                  </li>
                ))}
              </ul>

              <p className="text-primary font-semibold text-sm">
                {int.highlight}
              </p>
            </Card>
          ))}
        </div>

        {/* CARROSSEL DE LOGOS */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-bold text-foreground mb-6">
            Construtoras que Já Estão Um Passo à Frente com a V3 Data
          </h3>

          <div className="overflow-hidden relative mx-auto max-w-full">
            <div className="flex gap-12 animate-scroll whitespace-nowrap justify-start">
              {clientLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain opacity-90 hover:opacity-100 transition"
                />
              ))}
              {/* DUPLICAÇÃO PARA LOOP INFINITO */}
              {clientLogos.map((logo, idx) => (
                <img
                  key={`clone-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain opacity-90 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ANIMAÇÃO */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 22s linear infinite;
            display: flex;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Integrations;
