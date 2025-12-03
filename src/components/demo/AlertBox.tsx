import { AlertCircle, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AlertBoxProps {
  title: string;
  alerts: string[];
  type?: "warning" | "critical";
}

export const AlertBox = ({ title, alerts, type = "warning" }: AlertBoxProps) => {
  const Icon = type === "critical" ? AlertCircle : AlertTriangle;
  const colorClass = type === "critical" ? "text-red-600" : "text-orange-600";
  const bgClass = type === "critical" ? "bg-red-50" : "bg-orange-50";
  
  return (
    <Card className={`p-6 border-l-4 ${type === "critical" ? "border-red-600" : "border-orange-600"} ${bgClass}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${colorClass}`} />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-3">{title}</h3>
          <ul className="space-y-2">
            {alerts.map((alert, index) => (
              <li key={index} className="text-sm text-foreground flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${type === "critical" ? "bg-red-600" : "bg-orange-600"} mt-1.5`} />
                <span>{alert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};
