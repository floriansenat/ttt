import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ErrorFallback } from "@/components/ErrorFallback";
import { globalStyles } from "@/libs/stitches";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function AppProviders({ children }: React.PropsWithChildren) {
  globalStyles();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
          {children}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
