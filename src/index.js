import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TranslationProvider } from "react-google-multi-lang";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("DEBUG - env", process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslationProvider
        apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
        defaultLanguage="ko"
      >
        <App />
      </TranslationProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
