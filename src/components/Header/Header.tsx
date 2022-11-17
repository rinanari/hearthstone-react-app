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
    <div className={s.header}>
      <div className={s.header_container}>
        <div className={theme === "Light" ? s.decoration : s.decoration_dark}>
          <Link to="/" className={s.logo}>
            <img src={logo} width="70" alt="Logo" />
          </Link>
          <div className={s.buttons}>
            {isAuth && (
              <Suspense>
                <Navigation />
              </Suspense>
            )}
          </div>
          <div className={s.buttons}>
            <button
              onClick={toggleTheme}
              className={`button ${s.theme_button}`}
            >
              Change theme
            </button>
            <div className={s.sign_buttons}>
              {isAuth ? (
                <Suspense>
                  <SignOutButton />
                </Suspense>
              ) : (
                <>
                  <div className="button">
                    <Link to={"/signin"} className="button">
                      Sign in
                    </Link>
                  </div>
                  <div className="button">
                    <Link to={"/signup"} className="button">
                      Sign up
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
