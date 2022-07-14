import { useMutation } from "react-query";

async function register(body: FormData) {
  await fetch("http://127.0.0.1:3333/users", {
    method: "post",
    body,
  });
}

export function useRegister() {
  return useMutation(["register"], register);
}
