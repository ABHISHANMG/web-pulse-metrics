
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
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Geographic Distribution</CardTitle>
        <CardDescription className="text-gray-600">
          Visitors by country
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {countryData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.country}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{item.visitors.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({item.percentage}%)</span>
                </div>
              </div>
              <Progress 
                value={item.percentage} 
                className="h-2 bg-gray-200"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
