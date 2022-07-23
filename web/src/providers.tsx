import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ErrorFallback } from "@/components/ErrorFallback";
import { globalStyles } from "@/libs/stitches";
import { queryClient } from "@/libs/react-query";

export function AppProviders({ children }: React.PropsWithChildren) {
  globalStyles();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
          <BrowserRouter>{children}</BrowserRouter>
          <Toaster />
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
