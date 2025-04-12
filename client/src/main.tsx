import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }
  
  const root = createRoot(rootElement);
  root.render(<App />);
  
  console.log("React application rendered successfully");
});
