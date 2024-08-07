// import React, { useEffect } from "react";

// function GoogleTranslate() {
//   useEffect(() => {
//     const loadGoogleTranslateScript = () => {
//       // Check if the Google Translate script is already included
//       if (document.querySelector('script[src*="translate.google.com"]')) {
//         return;
//       }

//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.onload = () => {
//         if (typeof window.googleTranslateElementInit !== "function") {
//           console.error("Google Translate callback function is not defined");
//         }
//       };
//       script.onerror = () => {
//         console.error("Failed to load Google Translate script");
//       };
//       console.log("pended script");
//       document.body.appendChild(script);
//     };

//     // Define the Google Translate initialization function
//     window.googleTranslateElementInit = () => {
//       if (window.google && window.google.translate) {
//         new window.google.translate.TranslateElement(
//           { pageLanguage: "ko" },
//           "google_translate_element"
//         );
//       } else {
//         console.error("Google Translate object is not available");
//       }
//     };

//     loadGoogleTranslateScript();

//     // Cleanup function to remove the script and callback
//     return () => {
//       const script = document.querySelector(
//         'script[src*="translate.google.com"]'
//       );
//       if (script) {
//         script.remove();
//       }
//       delete window.googleTranslateElementInit;
//     };
//   }, []);

//   return <div id="google_translate_element"></div>;
// }

// export default GoogleTranslate;
