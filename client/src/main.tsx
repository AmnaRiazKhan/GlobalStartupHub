import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("root");

// Check if it exists
if (!rootElement) {
  console.error("Root element not found!");
} else {
  console.log("Root element found, rendering React app");
  // Create root and render
  const root = createRoot(rootElement);
  root.render(<App />);
  console.log("React application rendered successfully");
}
