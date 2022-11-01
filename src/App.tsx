import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Header } from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
