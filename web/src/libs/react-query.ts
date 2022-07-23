import toast, { ToastPosition } from "react-hot-toast";
import { MutationCache, QueryCache, QueryClient } from "react-query";

const TOAST_POSITION: ToastPosition = "bottom-center";

function isErrorResponse(err: any): err is Response {
  return Boolean(err?.status);
}

function isErrorString(err: any): err is string {
  return typeof err === "string";
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (err) => {
      if (isErrorResponse(err)) {
        toast.error(err.statusText, { position: TOAST_POSITION });
      }
      if (isErrorString(err)) {
        toast.error(err, { position: TOAST_POSITION });
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (err) => {
      if (isErrorResponse(err)) {
        toast.error(err.statusText, { position: TOAST_POSITION });
      }
      if (isErrorString(err)) {
        toast.error(err, { position: TOAST_POSITION });
      }
    },
  }),
});
