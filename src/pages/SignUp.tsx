import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../components/Form";
import { setAuth } from "../redux/slices/authSlice";
import { setUser } from "../redux/slices/userSlice";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      .catch(console.error);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Form title="Sign up" handleClick={handleSignUp} />
      <div>
        Already have an account? <Link to={"/signin"}> Sign in </Link>
      </div>
    </div>
  );
};
