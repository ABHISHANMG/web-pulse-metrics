
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { name: 'Jan', visitors: 4000, pageViews: 8400, sessions: 3200 },
  { name: 'Feb', visitors: 3000, pageViews: 6300, sessions: 2400 },
  { name: 'Mar', visitors: 5000, pageViews: 10500, sessions: 4000 },
  { name: 'Apr', visitors: 4500, pageViews: 9450, sessions: 3600 },
  { name: 'May', visitors: 6000, pageViews: 12600, sessions: 4800 },
  { name: 'Jun', visitors: 5500, pageViews: 11550, sessions: 4400 },
  { name: 'Jul', visitors: 7000, pageViews: 14700, sessions: 5600 },
];

export const TrafficChart = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Traffic Overview</CardTitle>
        <CardDescription className="text-gray-400">
          Visitor trends over the last 7 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Area
                type="monotone"
                dataKey="pageViews"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorPageViews)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorVisitors)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
