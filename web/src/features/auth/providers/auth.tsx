import React from "react";
import { createContext } from "@/utils/createContext";
import { UseMutateFunction } from "react-query";
import { useLogin, useRegister, useUser } from "../api";

interface AuthContext {
  user: any;
  login: UseMutateFunction<void, unknown, FormData, unknown>;
  //   logout: UseMutateFunction<void, unknown, FormData, unknown>;
  register: UseMutateFunction<void, unknown, FormData, unknown>;
}

const [useAuth, Provider] = createContext<AuthContext>("AuthProvider");

function AuthProvider({ children }: React.PropsWithChildren) {
  const { user } = useUser();
  const { mutate: register } = useRegister();
  const { mutate: login } = useLogin();

  return <Provider value={{ user, login, register }}>{children}</Provider>;
}

export { useAuth, AuthProvider };
