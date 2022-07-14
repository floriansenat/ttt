import * as React from "react";
import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { ErrorFallback } from "./components/ErrorFallback";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
