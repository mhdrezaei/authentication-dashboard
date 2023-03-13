import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import homeFa from "../src/languages/fa.json";
import homeEn from "../src/languages/en.json";

const resources = {
  en: {
    home: homeEn,
  },
  fa: {
    home: homeFa,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem("lang-theme") || "en",
  debug: false,
  fallbackLng: "en",
  saveMissing: true,
});

export default i18next;
