import { useContext, useState } from "react";
import { ThemeContext } from "../../services/ThemeProvider";

import s from "../Form/Form.module.scss";

interface FormPropsType {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const Form = ({ title, handleClick }: FormPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={s.form_container}>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(email, password);
        }}
      >
        <input
          className={theme === "Light" ? "input" : "input input_dark"}
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={theme === "Light" ? "input" : "input input_dark"}
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value={title} className="button" />
      </form>
    </div>
  );
};
