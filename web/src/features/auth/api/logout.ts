import { useMutation } from "react-query";
import Cookies from "js-cookie";

import { API_URL } from "@/libs/env";
import { COOKIE_API_NAME } from "./const";
import { useInvalidateUser } from "./get-user";

async function logout() {
  await fetch(`${API_URL}/logout`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${Cookies.get(COOKIE_API_NAME)}`,
    }),
  });

  Cookies.remove(COOKIE_API_NAME);
}

export function useLogout() {
  const { invalidateUser } = useInvalidateUser();

  return useMutation(["logout"], logout, {
    onSuccess: () => {
      invalidateUser();
    },
  });
}
