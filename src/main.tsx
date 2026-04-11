import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { SessionProvider } from "./providers/SessionProvider.tsx";
import "./index.css";
import { CountryProvider } from "./providers/CountryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <CountryProvider>
      <SessionProvider>
          <App />
      </SessionProvider>
        </CountryProvider>
    </BrowserRouter>
  </StrictMode>
);
