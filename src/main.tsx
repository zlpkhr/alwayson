import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app";
import "./main.css";
import { Messenger } from "./messenger";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Messenger />
  </StrictMode>,
);
