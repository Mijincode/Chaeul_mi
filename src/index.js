import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { APIProvider } from "@vis.gl/react-google-maps";

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("DEBUG - env", process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY);
root.render(
  <React.StrictMode>
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </APIProvider>
  </React.StrictMode>
);
reportWebVitals();
