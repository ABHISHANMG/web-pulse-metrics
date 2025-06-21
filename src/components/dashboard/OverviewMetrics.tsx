
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Eye, Clock, MousePointer } from "lucide-react";

export const OverviewMetrics = () => {
  const metrics = [
    {
      title: "Total Visitors",
      value: "45,231",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "vs last month"
    },
    {
      title: "Page Views",
      value: "123,456",
      change: "+8.2%",
      trend: "up",
      icon: Eye,
      description: "vs last month"
    },
    {
      title: "Avg. Session Duration",
      value: "3m 24s",
      change: "-2.1%",
      trend: "down",
      icon: Clock,
      description: "vs last month"
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-5.4%",
      trend: "up",
      icon: MousePointer,
      description: "vs last month"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up" ? metric.change.startsWith("+") : metric.change.startsWith("-");
        
        return (
          <Card key={index} className="bg-white border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={isPositive ? "default" : "destructive"}
                    className={`text-xs ${
                      isPositive 
                        ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100" 
                        : "bg-red-100 text-red-700 border-red-200 hover:bg-red-100"
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {metric.change}
                  </Badge>
                  <span className="text-xs text-gray-500">{metric.description}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
