import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Super simple test component for debugging
function App() {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8 min-h-screen bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">VentureVisa</h1>
        <p className="text-xl">If you can see this, the React app is rendering properly.</p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Diagnostic Information</h2>
          <p>This is a simplified test page to verify React rendering.</p>
          <p className="mt-2">Once this is working, we can restore the full application.</p>
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
