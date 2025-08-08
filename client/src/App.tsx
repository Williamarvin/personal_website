// client/src/App.tsx
import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Vite exposes the configured base as import.meta.env.BASE_URL.
// It’s "/" in dev and "/personal_website/" in production.
// Wouter expects base without a trailing slash, and for root it should be "" (not "/").
const rawBase = import.meta.env.BASE_URL ?? "/";
const basename = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base={basename || undefined}>
          <Toaster />
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;