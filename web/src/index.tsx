import * as React from "react";
import ReactDOM from "react-dom/client";

import { AppProviders } from "./providers";
import { AppRoutes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>
);
