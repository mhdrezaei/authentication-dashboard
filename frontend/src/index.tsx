import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/userContext";
import { ThemeProvider } from "./context/themeContext";
import { CompanyProvider } from "./context/companyContext";
// import { LanguageProvider } from "./context/langContext";
import "./i18n";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <CompanyProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CompanyProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
