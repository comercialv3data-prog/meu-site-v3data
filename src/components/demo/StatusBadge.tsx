import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "excelente" | "bom" | "regular" | "atenção" | "crítico" | "urgente";
  children?: React.ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const getStatusStyle = () => {
    switch (status) {
      case "excelente":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "bom":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "regular":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "atenção":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "crítico":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "urgente":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Badge variant="secondary" className={`${getStatusStyle()} font-medium`}>
      {children || status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};
