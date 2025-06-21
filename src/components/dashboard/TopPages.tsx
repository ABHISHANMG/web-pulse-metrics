
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
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Top Pages</CardTitle>
        <CardDescription className="text-gray-600">
          Most visited pages this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">{page.title}</span>
                  <ExternalLink className="h-3 w-3 text-gray-500" />
                </div>
                <span className="text-xs text-gray-500">{page.path}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{page.views.toLocaleString()}</div>
                <Badge 
                  variant={page.change.startsWith('+') ? "default" : "destructive"}
                  className={`text-xs ${
                    page.change.startsWith('+')
                      ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100"
                      : "bg-red-100 text-red-700 border-red-200 hover:bg-red-100"
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
