import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink =
    "https://wa.me/5527981035921?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20solução%20da%20V3%20Data.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1EB259] text-white px-5 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      <span className="hidden md:inline-block font-bold text-base">
        Tire suas dúvidas
      </span>
    </a>
  );
};

export default WhatsAppButton;
