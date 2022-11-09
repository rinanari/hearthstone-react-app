import { useState } from "react";
import { FormPropsType } from "../models/models";

export const Form = ({ title, handleClick }: FormPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};
