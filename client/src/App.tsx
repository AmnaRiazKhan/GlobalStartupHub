import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Super minimal App component with very obvious styling
function App() {
  console.log("App component rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{
        backgroundColor: '#ff0000', // Bright red
        color: '#ffffff',
        padding: '40px',
        margin: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '30px',
          color: 'yellow',
        }}>WEBVIEW TEST</h1>
        <p>If you can see this BRIGHT RED box with YELLOW text, React is rendering properly in the webview!</p>
        <div style={{
          marginTop: '30px',
          backgroundColor: '#ffffff',
          color: '#000000',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <p>Timestamp: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
