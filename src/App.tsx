import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout";
import Index from "./pages/Index";
import GettingStarted from "./pages/GettingStarted";
import Components from "./pages/Components";
import Examples from "./pages/Examples";
import Changelog from "./pages/Changelog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DocsLayout />}>
            <Route index element={<Index />} />
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="components" element={<Components />} />
            <Route path="examples" element={<Examples />} />
            <Route path="changelog" element={<Changelog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;