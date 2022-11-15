import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to="/">
        <button className="app_error-boundary-button">Go to Main Page</button>
      </Link>
    </div>
  );
};
