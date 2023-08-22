import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../assets/locales/en.json";
import translationVI from "../assets/locales/vi.json";

// the translations
const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI }
};

i18next.use(initReactI18next).init({
  lng: "vi",
  debug: true,
  resources
});