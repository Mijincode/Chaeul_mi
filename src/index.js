import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { TranslationProvider } from "react-google-multi-lang";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("DEBUG - env", process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY);
root.render(
  <React.StrictMode>
    {/* <TranslationProvider
      apiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}
      defaultLanguage="ko"
    > */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    {/* </TranslationProvider> */}
  </React.StrictMode>
);
reportWebVitals();
