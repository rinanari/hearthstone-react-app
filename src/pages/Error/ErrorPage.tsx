import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="container">
      <div>
        <h1>Something went wrong</h1>
        <Link to="/">
          <button className="button app_error-boundary-button">
            Go to Main Page
          </button>
        </Link>
      </div>
    </div>
  );
};
