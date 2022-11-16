import { useDispatch } from "react-redux";
import { removeAuth } from "../../redux/slices/authSlice";
import { signUserOut } from "../../redux/slices/userSlice";

export const SignOutButton = () => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signUserOut());
    dispatch(removeAuth());
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
