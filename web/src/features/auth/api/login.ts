import { useMutation } from "react-query";
import Cookies from "js-cookie";

import { API_URL } from "@/libs/env";
import { COOKIE_API_NAME } from "./const";
import { useInvalidateUser } from "./get-user";

async function login(body: FormData) {
  const res = await fetch(`${API_URL}/login`, {
    method: "post",
    body,
  });
  const parsedRed = await res.json();

  Cookies.set(COOKIE_API_NAME, parsedRed.token, { expires: 7 });
}

export function useLogin() {
  const { invalidateUser } = useInvalidateUser();

  return useMutation(["login"], login, {
    onSuccess: () => {
      invalidateUser();
    },
  });
}
