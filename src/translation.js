import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from "./en";
import translateSp from "./sp";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translateEn },
      sp: { translation: translateSp },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;