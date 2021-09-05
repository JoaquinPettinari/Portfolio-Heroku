import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import translateEn from "./en";
import translateSp from "./sp";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translateEn },
      sp: { translation: translateSp },
    },
    lng: navigator.language.includes("es") ? "sp" : "en",
    fallbackLng: navigator.language.includes("es") ? "sp" : "en",
    interpolation: { escapeValue: false },
  });

const useTranslate = (word) => {
  const { t } = useTranslation();
  return t(word);
}

const useDefaultLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  return language.includes("es") ? "sp" : "en"
}
export{ i18n, useTranslate, useDefaultLanguage };