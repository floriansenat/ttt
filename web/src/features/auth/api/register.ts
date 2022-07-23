import { useMutation } from "react-query";
import { API_URL } from "@/libs/env";
import { useLogin } from "./login";

async function register(body: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "post",
    body,
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }
}

export function useRegister() {
  const { mutate: login } = useLogin();

  return useMutation(["register"], register, {
    onSuccess: (_, body) => {
      login(body);
    },
  });
}
