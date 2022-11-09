import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/images/logo.png";
import s from "../components/Header.module.scss";
import { SignOutButton } from "./SignOutButton";

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      <div className={s.header_container}>
        <Link to="/" className={s.logo}>
          <img src={logo} width="70" alt="Logo" />
        </Link>
        {isAuth && (
          <nav>
            <Link to="/favourites">Favourite cards</Link>
            <Link to="/history">Search history</Link>
          </nav>
        )}
        {isAuth ? (
          <SignOutButton />
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
