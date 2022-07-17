import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ErrorFallback } from "@/components/ErrorFallback";
import { globalStyles } from "@/libs/stitches";
import { AuthProvider } from "@/features/auth";

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
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
