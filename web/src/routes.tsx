import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Register, Login } from "./features/auth";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
