
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OverviewMetrics } from "@/components/dashboard/OverviewMetrics";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { GeographicData } from "@/components/dashboard/GeographicData";
import { TopPages } from "@/components/dashboard/TopPages";
import { DeviceBreakdown } from "@/components/dashboard/DeviceBreakdown";
import { RealtimeUsers } from "@/components/dashboard/RealtimeUsers";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { Settings, Download, RefreshCw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm bg-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-sm text-gray-600">Monitor your website performance in real-time</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Real-time Status */}
        <div className="mb-8">
          <RealtimeUsers />
        </div>

        {/* Overview Metrics */}
        <div className="mb-8">
          <OverviewMetrics />
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-gray-100 border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="traffic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Traffic Analysis
            </TabsTrigger>
            <TabsTrigger value="behavior" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              User Behavior
            </TabsTrigger>
            <TabsTrigger value="conversions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Conversions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TrafficChart />
              </div>
              <div className="space-y-6">
                <DeviceBreakdown />
                <TopPages />
              </div>
            </div>
            <GeographicData />
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrafficChart />
              <GeographicData />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DeviceBreakdown />
              <TopPages />
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TopPages />
              </div>
              <DeviceBreakdown />
            </div>
          </TabsContent>

          <TabsContent value="conversions" className="space-y-6">
            <ConversionFunnel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
