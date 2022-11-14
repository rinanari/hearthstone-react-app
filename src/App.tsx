import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HistoryPage } from "./pages/HistoryPage";
import "./App.scss";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { SingleCardPage } from "./pages/SingleCardPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:cardId" element={<SingleCardPage />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/favourites" element={<FavouritesPage />}></Route>
          <Route path="/history" element={<HistoryPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
