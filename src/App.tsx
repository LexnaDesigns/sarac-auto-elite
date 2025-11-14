import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BadCreditAutoFinancing from "./pages/blog/BadCreditAutoFinancing";
import UnderstandingCreditScore from "./pages/blog/UnderstandingCreditScore";
import NewVsUsedCars from "./pages/blog/NewVsUsedCars";
import AutoLoanMistakes from "./pages/blog/AutoLoanMistakes";
import RebuildingCredit from "./pages/blog/RebuildingCredit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fr" element={<Index />} />
            {/* Blog Post Routes */}
            <Route path="/blog/bad-credit-auto-financing" element={<BadCreditAutoFinancing />} />
            <Route path="/blog/understanding-credit-score" element={<UnderstandingCreditScore />} />
            <Route path="/blog/new-vs-used-cars" element={<NewVsUsedCars />} />
            <Route path="/blog/auto-loan-mistakes" element={<AutoLoanMistakes />} />
            <Route path="/blog/rebuilding-credit" element={<RebuildingCredit />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
