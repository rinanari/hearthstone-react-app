import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { SignIn } from "./pages/SignIn";

export const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};
