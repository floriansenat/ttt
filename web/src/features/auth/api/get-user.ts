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
  const { data, ...otherProps } = useQuery([queryKey], getUser);
  return { user: data, ...otherProps };
}

export function useInvalidateUser() {
  const queryClient = useQueryClient();
  return {
    invalidateUser: () => queryClient.invalidateQueries([queryKey]),
  };
}
