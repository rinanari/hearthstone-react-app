import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Spinner } from "./components/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import "./App.scss";
import { ErrorPage } from "./pages/ErrorPage";

const FavouritesPage = lazy(() =>
  import("./pages/FavouritesPage").then(({ FavouritesPage }) => ({
    default: FavouritesPage,
  }))
);
const HistoryPage = lazy(() =>
  import("./pages/HistoryPage").then(({ HistoryPage }) => ({
    default: HistoryPage,
  }))
);

const SingleCardPage = lazy(() =>
  import("./pages/SingleCardPage").then(({ SingleCardPage }) => ({
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
