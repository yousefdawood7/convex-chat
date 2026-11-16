import { ConvexProvider } from "convex/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { convex } from "./lib/convex.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConvexProvider client={convex}></ConvexProvider>
  </StrictMode>,
);
