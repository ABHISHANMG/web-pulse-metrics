
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

export const RealtimeUsers = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <span className="text-2xl font-bold text-gray-900">1,247</span>
              <span className="text-sm text-gray-600">users online now</span>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 border-green-200">
            +23 in last 5min
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
