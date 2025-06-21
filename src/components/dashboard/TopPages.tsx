
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const topPages = [
  { path: "/", title: "Homepage", views: 15420, change: "+12%" },
  { path: "/products", title: "Products", views: 8230, change: "+8%" },
  { path: "/about", title: "About Us", views: 5670, change: "+15%" },
  { path: "/contact", title: "Contact", views: 3240, change: "-2%" },
  { path: "/blog", title: "Blog", views: 2890, change: "+25%" },
];

export const TopPages = () => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Top Pages</CardTitle>
        <CardDescription className="text-gray-400">
          Most visited pages this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-white">{page.title}</span>
                  <ExternalLink className="h-3 w-3 text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">{page.path}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-white">{page.views.toLocaleString()}</div>
                <Badge 
                  variant={page.change.startsWith('+') ? "default" : "destructive"}
                  className={`text-xs ${
                    page.change.startsWith('+')
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}
                >
                  {page.change}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
