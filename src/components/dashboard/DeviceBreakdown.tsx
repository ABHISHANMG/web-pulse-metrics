
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Monitor, Smartphone, Tablet } from "lucide-react";

const deviceData = [
  { name: "Desktop", value: 65, color: "#3B82F6", icon: Monitor },
  { name: "Mobile", value: 28, color: "#10B981", icon: Smartphone },
  { name: "Tablet", value: 7, color: "#F59E0B", icon: Tablet },
];

export const DeviceBreakdown = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Device Breakdown</CardTitle>
        <CardDescription className="text-gray-400">
          Traffic by device type
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3 mt-4">
          {deviceData.map((device, index) => {
            const Icon = device.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: device.color }}
                  ></div>
                  <Icon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{device.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{device.value}%</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
