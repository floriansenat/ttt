import { useQuery, useQueryClient } from "react-query";
import Cookies from "js-cookie";

import { API_URL } from "@/libs/env";
import { COOKIE_API_NAME } from "./const";

const queryKey = "me";

async function getUser() {
  const res = await fetch(`${API_URL}/me`, {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${Cookies.get(COOKIE_API_NAME)}`,
    }),
  });
  return await res.json();
}

export function useUser() {
  const { data, status, ...otherProps } = useQuery([queryKey], getUser);
  const isLoggedIn = status === "success" && !data.errors;

  return { user: data, isLoggedIn, status, ...otherProps };
}

export function useInvalidateUser() {
  const queryClient = useQueryClient();
  return {
    invalidateUser: () => queryClient.invalidateQueries([queryKey]),
  };
}
