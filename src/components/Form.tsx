import { useState } from "react";

interface FormPropsType {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const Form = ({ title, handleClick }: FormPropsType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(email, password);
        }}
      >
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
        <input type="submit" value={title} />
      </form>
    </div>
  );
};
