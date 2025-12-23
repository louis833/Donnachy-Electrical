import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ElectricalService from "@/pages/ElectricalService";
import HeatPumpsService from "@/pages/HeatPumpsService";
import SolarService from "@/pages/SolarService";
import CommercialService from "@/pages/CommercialService";
import FinancingService from "@/pages/FinancingService";
import MaintenanceService from "@/pages/MaintenanceService";
import ResidentialService from "@/pages/ResidentialService";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/electrical" component={ElectricalService} />
      <Route path="/heat-pumps" component={HeatPumpsService} />
      <Route path="/solar" component={SolarService} />
      <Route path="/commercial" component={CommercialService} />
      <Route path="/financing" component={FinancingService} />
      <Route path="/maintenance" component={MaintenanceService} />
      <Route path="/residential" component={ResidentialService} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
