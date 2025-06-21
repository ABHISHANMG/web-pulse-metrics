
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

export const RealtimeUsers = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Live</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-400" />
              <span className="text-2xl font-bold text-white">1,247</span>
              <span className="text-sm text-gray-300">users online now</span>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            +23 in last 5min
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
