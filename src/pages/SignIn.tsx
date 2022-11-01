import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../components/Form";
import { setUser } from "../redux/slices/userSlice";

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
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <Form title="Sign in" handleClick={handleSignIn} />
      <p>
        Not yet registered? <Link to={"/signup"} />
      </p>
    </div>
  );
};
