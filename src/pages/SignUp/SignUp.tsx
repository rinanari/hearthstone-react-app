import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../../components/Form/Form";
import { setAuth } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/userSlice";
import { ThemeContext } from "../../services/ThemeProvider";

import s from "../SignUp/SignUp.module.scss";

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          setUser({
            email: user.user.email,
            id: user.user.tenantId,
          })
        );
        dispatch(setAuth());
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className={theme === "Light" ? "content" : "content content_dark"}>
      <h1>Sign up</h1>
      <Form title="Sign up" handleClick={handleSignUp} />
      {errorMessage === "Firebase: Error (auth/email-already-in-use)." && (
        <p>This email is already registered</p>
      )}
      {errorMessage ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)." && (
        <p>Your password should be at least 6 characters long</p>
      )}
      <div>
        Already have an account?{" "}
        <Link to={"/signin"} className={s.link}>
          {" "}
          Sign in{" "}
        </Link>
      </div>
    </div>
  );
};
