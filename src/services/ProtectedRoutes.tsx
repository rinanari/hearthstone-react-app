import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SignIn } from "../pages/SignIn/SignIn";

export const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};
