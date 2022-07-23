import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { API_URL } from "@/libs/env";

import { useLogin } from "./login";

async function register(body: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "post",
    body,
  });

  if (!res.ok) {
    throw await res.text();
  }
}

export function useRegister() {
  const { mutate: login } = useLogin();

  return useMutation(["register"], register, {
    onSuccess: (_, body) => {
      login(body);
      toast.success("Account created!", {
        position: "bottom-center",
      });
    },
  });
}
