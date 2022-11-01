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
            <a className={s.sign_in} href="#">
              Sign in
            </a>
          </div>
          <div className="button">
            <a className={s.sign_up} href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
