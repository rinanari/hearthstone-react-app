import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "./ThemeProvider";
import persistStore from "redux-persist/es/persistStore";
import App from "./App";
import "./firebase";
import "./index.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
