import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Super minimal App component with visible styles
function App() {
  console.log("App component rendering");
  
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'purple',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'auto'
    }}>
      <h1 style={{fontSize: '40px', color: 'yellow'}}>WEBVIEW TEST PAGE</h1>
      <p>This should be visible in the webview tab</p>
      <div style={{
        margin: '20px',
        padding: '20px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '10px',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
        <p>If you see this purple background with white text, the React app is working in webview</p>
      </div>
    </div>
  );
}

export default App;
