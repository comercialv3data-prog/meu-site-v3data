import { Card } from "@/components/ui/card";

const Conversation = () => {
  return (
    <section className="py-20 px-4 bg-[#0A1A2F]">
      <div className="container mx-auto max-w-3xl">
        {/* Caixa de conversa */}
        <Card className="w-full mx-auto p-0 bg-[#ECE5DD] border-none shadow-2xl rounded-2xl overflow-hidden">
          {/* Cabeçalho fake do WhatsApp */}
          <div className="bg-[#075E54] text-white px-4 py-3 font-semibold text-center text-sm">
            IA · Assistente Inteligente V3 Data
          </div>

          {/* Mensagens */}
          <div className="p-4 space-y-4 text-sm">
            {/* Cliente */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg shadow max-w-[85%]">
                Bom dia! por que a margem da obra Residencial Primavera caiu
                esse mês?
              </div>
            </div>

            {/* IA */}
            <div className="flex justify-start">
              <div className="bg-white px-3 py-2 rounded-lg shadow max-w-[85%]">
                O IDP está em <b>0,62</b>. Houve desvios nas fases do cronograma
                e nos custos do plano de contas.
              </div>
            </div>

            {/* Cliente */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg shadow max-w-[85%]">
                E quanto isso impacta na margem?
              </div>
            </div>

            {/* IA */}
            <div className="flex justify-start">
              <div className="bg-white px-3 py-2 rounded-lg shadow max-w-[85%]">
                A margem caiu <b>4,7 pontos percentuais</b>.
              </div>
            </div>

            {/* Cliente */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg shadow max-w-[85%]">
                Quais itens puxaram isso pra baixo?
              </div>
            </div>

            {/* IA */}
            <div className="flex justify-start">
              <div className="bg-white px-3 py-2 rounded-lg shadow max-w-[85%]">
                <b>Suprimentos (material):</b> ficaram 11% acima do previsto nas
                fases de fundação e alvenaria.
                <br />
                <b>Mão de obra:</b> ficou 9% acima do planejado nas fases de
                estrutura e acabamento inicial.
              </div>
            </div>

            {/* Cliente */}
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] px-3 py-2 rounded-lg shadow max-w-[85%]">
                E tem recuperação?
              </div>
            </div>

            {/* IA */}
            <div className="flex justify-start">
              <div className="bg-white px-3 py-2 rounded-lg shadow max-w-[85%]">
                Tem. Ajustando consumo de material, redistribuindo mão de obra e
                atualizando o cronograma, a obra pode recuperar cerca de{" "}
                <b>2,1 pontos</b> da margem.
              </div>
            </div>
          </div>
        </Card>

        {/* Frase final ajustada */}
        <p className="text-white text-center text-base mt-8 opacity-90 leading-relaxed">
          Inteligência de dados 24/7 cruzando <b>Planejamento</b>,{" "}
          <b>Suprimentos</b> e <b>Prazo</b>.
          <br />
          Clareza total para decisões rápidas, assertivas e orientadas à margem.
        </p>
      </div>
    </section>
  );
};

export default Conversation;
