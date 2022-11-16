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
      .catch(console.error);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <Form title="Sign in" handleClick={handleSignIn} />
      <div>
        Not yet registered? <Link to={"/signup"}>Register</Link>
      </div>
    </div>
  );
};
