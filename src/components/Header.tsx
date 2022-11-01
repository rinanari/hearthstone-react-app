import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import s from "../components/Header.module.scss";

export const Header = () => {
  return (
    <div>
      <div className={s.header_container}>
        <div className={s.logo}>
          <img src={logo} width="70" alt="Logo" />
        </div>
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
      </div>
    </div>
  );
};
