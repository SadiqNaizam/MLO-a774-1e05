import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Default to LoginPage */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Add other application routes here */}
          {/* Example route for terms page linked from registration */}
          <Route path="/terms-and-conditions" element={<div><h1>Terms and Conditions</h1><p>This is a placeholder page for terms and conditions.</p><Link to="/register">Back to Registration</Link></div>} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;