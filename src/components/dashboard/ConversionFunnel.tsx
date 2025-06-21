
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown } from "lucide-react";

const funnelData = [
  { stage: "Visitors", count: 10000, percentage: 100, color: "bg-blue-500" },
  { stage: "Product Views", count: 6500, percentage: 65, color: "bg-green-500" },
  { stage: "Add to Cart", count: 2600, percentage: 26, color: "bg-yellow-500" },
  { stage: "Checkout", count: 1300, percentage: 13, color: "bg-orange-500" },
  { stage: "Purchase", count: 520, percentage: 5.2, color: "bg-red-500" },
];

export const ConversionFunnel = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Conversion Funnel</CardTitle>
        <CardDescription className="text-gray-400">
          User journey through your website
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {funnelData.map((stage, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">{stage.stage}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-white font-medium">{stage.count.toLocaleString()}</span>
                  <span className="text-xs text-gray-400">({stage.percentage}%)</span>
                  {index > 0 && (
                    <TrendingDown className="h-3 w-3 text-red-400" />
                  )}
                </div>
              </div>
              <div className="relative">
                <Progress 
                  value={stage.percentage} 
                  className="h-8 bg-gray-700"
                />
                <div 
                  className={`absolute top-0 left-0 h-8 ${stage.color} rounded-sm transition-all duration-1000`}
                  style={{ width: `${stage.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
          <div className="text-sm text-gray-300">
            <strong className="text-white">Conversion Rate:</strong> 5.2% of visitors complete a purchase
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
