import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Register, Login, useUser } from "@/features/auth";
import { Gameboard } from "@/features/game";

export function AppRoutes() {
  const { user, status } = useUser();
  const isLoggedIn = status === "success" && !user.errors;

  if (status === "loading") return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Gameboard />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
