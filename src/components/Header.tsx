import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/images/logo.png";
import s from "../components/Header.module.scss";

const Navigation = lazy(() =>
  import("../components/Navigation").then(({ Navigation }) => ({
    default: Navigation,
  }))
);
const SignOutButton = lazy(() =>
  import("./SignOutButton").then(({ SignOutButton }) => ({
    default: SignOutButton,
  }))
);

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <div className={s.header_container}>
        <Link to="/" className={s.logo}>
          <img src={logo} width="70" alt="Logo" />
        </Link>
        {isAuth && (
          <Suspense>
            <Navigation />
          </Suspense>
        )}
        {isAuth ? (
          <Suspense>
            <SignOutButton />
          </Suspense>
        ) : (
          <div className={s.sign_buttons}>
            <div className="button">
              <Link to={"/signin"} className={s.sign_in}>
                Sign in
              </Link>
            </div>
            <div className="button">
              <Link to={"/signup"} className={s.sign_up}>
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
