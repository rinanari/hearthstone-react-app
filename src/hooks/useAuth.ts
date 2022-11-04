import { useAppSelector } from "../redux/hooks";
export function useAuth() {
  const { isAuth } = useAppSelector((state) => state.auth);
  return {
    isAuth,
  };
}
