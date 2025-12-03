import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso trocar meu sistema atual?",
    answer:
      "Nossa solução se integra aos seus sistemas existentes sem necessidade de substituição. Funcionamos como uma camada inteligente sobre suas ferramentas atuais.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "De 2 a 3 meses para implementação completa. Isso inclui engenharia de dados, governança, inteligência analítica, IA e automações.",
  },
  {
    question: "Qual o retorno tangível que terei?",
    answer:
      "Empresas que implementaram nossas soluções alcançaram entre 4% a 11% de aumento no lucro líquido, além de ganhos em eficiência operacional, redução de erros e melhor tomada de decisão baseada em dados.",
  },
  {
    question: "Qual o investimento necessário?",
    answer:
      "O investimento varia conforme o tamanho e complexidade da operação. Realizamos uma análise consultiva para entender suas necessidades e apresentar a melhor solução. Você pode agendar uma conversa sem compromisso.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl w-full">
        <div className="text-center mb-6 sm:mb-8 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Tudo o que você precisa saber para começar
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-3 sm:px-4 bg-card"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
