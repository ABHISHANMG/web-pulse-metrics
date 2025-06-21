
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const countryData = [
  { country: "United States", visitors: 12500, percentage: 35 },
  { country: "United Kingdom", visitors: 8200, percentage: 23 },
  { country: "Germany", visitors: 6100, percentage: 17 },
  { country: "France", visitors: 4300, percentage: 12 },
  { country: "Canada", visitors: 2800, percentage: 8 },
  { country: "Australia", visitors: 1800, percentage: 5 },
];

export const GeographicData = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Geographic Distribution</CardTitle>
        <CardDescription className="text-gray-400">
          Visitors by country
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {countryData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-300">{item.country}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">{item.visitors.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({item.percentage}%)</span>
                </div>
              </div>
              <Progress 
                value={item.percentage} 
                className="h-2 bg-gray-700"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${item.percentage}%, #374151 ${item.percentage}%, #374151 100%)`
                }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
