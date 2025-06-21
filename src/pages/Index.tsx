
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { OverviewMetrics } from "@/components/dashboard/OverviewMetrics";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { GeographicData } from "@/components/dashboard/GeographicData";
import { TopPages } from "@/components/dashboard/TopPages";
import { DeviceBreakdown } from "@/components/dashboard/DeviceBreakdown";
import { RealtimeUsers } from "@/components/dashboard/RealtimeUsers";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { Settings, Download, RefreshCw, Filter, CalendarIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Index = () => {
  const [dateRange, setDateRange] = useState("Last 28 days");
  const [date, setDate] = useState<Date>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm bg-white"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Monitor your website performance in real-time</p>
              </div>
            </div>
            
            {/* Filter and Date Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-blue-50/50 flex-1 sm:flex-none"
              >
                <Filter className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-full sm:w-[160px] border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                  <SelectItem value="Last 28 days">Last 28 days</SelectItem>
                  <SelectItem value="Last 3 months">Last 3 months</SelectItem>
                  <SelectItem value="Last 6 months">Last 6 months</SelectItem>
                  <SelectItem value="Last year">Last year</SelectItem>
                  <SelectItem value="Custom range">Custom range</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 sm:gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "border-gray-300 text-gray-700 hover:text-gray-900",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">
                        {date ? format(date, "MMM dd, yyyy") : "Select date"}
                      </span>
                      <span className="sm:hidden">Date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border border-gray-200 shadow-lg" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
                
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Refresh</span>
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Export</span>
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:text-gray-900">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Real-time Status */}
        <div className="mb-6 sm:mb-8">
          <RealtimeUsers />
        </div>

        {/* Overview Metrics */}
        <div className="mb-6 sm:mb-8">
          <OverviewMetrics />
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-auto lg:grid-cols-4 bg-gray-100 border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="traffic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
              Traffic
            </TabsTrigger>
            <TabsTrigger value="behavior" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
              Behavior
            </TabsTrigger>
            <TabsTrigger value="conversions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm">
              Conversions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              <div className="xl:col-span-2">
                <TrafficChart />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <DeviceBreakdown />
                <TopPages />
              </div>
            </div>
            <GeographicData />
          </TabsContent>

          <TabsContent value="traffic" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <TrafficChart />
              <GeographicData />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <DeviceBreakdown />
              <TopPages />
            </div>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              <div className="xl:col-span-2">
                <TopPages />
              </div>
              <DeviceBreakdown />
            </div>
          </TabsContent>

          <TabsContent value="conversions" className="space-y-4 sm:space-y-6">
            <ConversionFunnel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
