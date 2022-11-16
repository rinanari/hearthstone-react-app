import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main/MainPage";
import { Header } from "./components/Header/Header";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { ProtectedRoutes } from "./services/ProtectedRoutes";
import { Spinner } from "./components/Spinner/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import "./App.scss";
import { ErrorPage } from "./pages/Error/ErrorPage";

const FavouritesPage = lazy(() =>
  import("./pages/Favourites/FavouritesPage").then(({ FavouritesPage }) => ({
    default: FavouritesPage,
  }))
);
const HistoryPage = lazy(() =>
  import("./pages/History/HistoryPage").then(({ HistoryPage }) => ({
    default: HistoryPage,
  }))
);

const SingleCardPage = lazy(() =>
  import("./pages/SingleCard/SingleCardPage").then(({ SingleCardPage }) => ({
    default: SingleCardPage,
  }))
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" index element={<MainPage />} />
          </Route>

          <Route path="/:cardId" element={<SingleCardPage />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/favourites"
              element={
                <ErrorBoundary fallback={<ErrorPage />}>
                  <FavouritesPage />
                </ErrorBoundary>
              }
            ></Route>
            <Route
              path="/history"
              element={
                <ErrorBoundary fallback={<ErrorPage />}>
                  <HistoryPage />
                </ErrorBoundary>
              }
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
