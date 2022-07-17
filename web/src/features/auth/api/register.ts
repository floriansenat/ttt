import { useMutation } from "react-query";
import { API_URL } from "@/libs/env";

async function register(body: FormData) {
  await fetch(`${API_URL}/users`, {
    method: "post",
    body,
  });
}

export function useRegister() {
  return useMutation(["register"], register);
}
