import { Navigate, useRoutes } from "react-router-dom";

import { Register, Login, useUser } from "@/features/auth";
import { Gameboard } from "@/features/game";

const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const protectedRoutes = [
  {
    path: "/",
    element: <Gameboard />,
  },
];

const commonRoutes = [{ path: "*", element: <Navigate to="/" /> }];

export function AppRoutes() {
  const { status, isLoggedIn } = useUser();

  const appRoutes = isLoggedIn ? protectedRoutes : publicRoutes;
  const routes = useRoutes([...appRoutes, ...commonRoutes]);

  if (status === "loading") return <div>Loading...</div>;

  return <>{routes}</>;
}
