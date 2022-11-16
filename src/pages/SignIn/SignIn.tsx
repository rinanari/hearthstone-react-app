import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../../components/Form/Form";
import { setUser } from "../../redux/slices/userSlice";
import { setAuth } from "../../redux/slices/authSlice";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
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
      .catch((error) => setError(true));
  };

  return (
    <div>
      <h1>Sign in</h1>
      <Form title="Sign in" handleClick={handleSignIn} />
      {error && <p>Wrong login or password</p>}
      <div>
        Not yet registered? <Link to={"/signup"}>Register</Link>
      </div>
    </div>
  );
};
