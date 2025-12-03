import { Building2, DollarSign, TrendingUp, Users, ShoppingCart, Package } from "lucide-react";

interface DemoSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DemoSidebar = ({ activeTab, onTabChange }: DemoSidebarProps) => {
  const menuItems = [
    { id: "financial", label: "Visão Financeira", icon: DollarSign },
    { id: "performance", label: "Desempenho (IDC/IDP)", icon: TrendingUp },
    { id: "hr", label: "Indicadores RH", icon: Users },
    { id: "commercial", label: "Funil Comercial", icon: ShoppingCart },
    { id: "supply", label: "Suprimentos", icon: Package },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#1e3a8a] text-white flex flex-col">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">Sua Empresa</h1>
            <p className="text-xs text-white/70">Gestão Inteligente</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-white/20 text-white font-medium" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-white/50 text-center">© 2024 Sua Empresa</p>
      </div>
    </div>
  );
};
