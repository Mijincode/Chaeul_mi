import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TranslationProvider } from "react-google-multi-lang";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("DEBUG - env", process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY);
root.render(
  <React.StrictMode>
    <TranslationProvider
      apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
      defaultLanguage="ko"
    >
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
reportWebVitals();
