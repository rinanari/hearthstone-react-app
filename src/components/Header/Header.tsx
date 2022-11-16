import { useContext, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ThemeContext } from "../../services/ThemeProvider";

import logo from "../../assets/images/logo.png";
import s from "../Header/Header.module.scss";

const Navigation = lazy(() =>
  import("../Navigation/Navigation").then(({ Navigation }) => ({
    default: Navigation,
  }))
);
const SignOutButton = lazy(() =>
  import("../SignOut/SignOutButton").then(({ SignOutButton }) => ({
    default: SignOutButton,
  }))
);

export const Header = () => {
  const { isAuth } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={
          theme === "Light" ? s.header_container : s.header_container_dark
        }
      >
        <Link to="/" className={s.logo}>
          <img src={logo} width="70" alt="Logo" />
        </Link>
        {isAuth && (
          <Suspense>
            <Navigation />
          </Suspense>
        )}
        <button onClick={toggleTheme}>Change theme</button>
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
