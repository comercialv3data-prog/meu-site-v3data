import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DemoTopBarProps {
  title: string;
}

export const DemoTopBar = ({ title }: DemoTopBarProps) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        
        <div className="flex items-center gap-4">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="todas">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas as Obras</SelectItem>
              <SelectItem value="obra1">Obra Residencial SP</SelectItem>
              <SelectItem value="obra2">Obra Comercial RJ</SelectItem>
              <SelectItem value="obra3">Obra Industrial MG</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
