import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ResidentialService from "@/pages/ResidentialService";
import CommercialService from "@/pages/CommercialService";
import MaintenanceService from "@/pages/MaintenanceService";
import FinancingService from "@/pages/FinancingService";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/residential" component={ResidentialService} />
      <Route path="/commercial" component={CommercialService} />
      <Route path="/maintenance" component={MaintenanceService} />
      <Route path="/financing" component={FinancingService} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
