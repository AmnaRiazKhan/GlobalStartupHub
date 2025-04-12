import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Funding from "./pages/Funding";
import Immigration from "./pages/Immigration";
import Visas from "./pages/Visas";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

// Simple test component to debug rendering
const TestHome = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">VentureVisa - Test Page</h1>
      <p className="mt-4 text-lg">If you can see this, the React app is loading correctly.</p>
      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <p>This is a temporary test page to check rendering.</p>
      </div>
    </div>
  );
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={TestHome} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/funding" component={Funding} />
      <Route path="/immigration" component={Immigration} />
      <Route path="/visas" component={Visas} />
      <Route path="/programs" component={Programs} />
      <Route path="/community" component={Community} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
