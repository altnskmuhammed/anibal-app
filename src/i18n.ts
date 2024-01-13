// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        news: "News",
        features: "Features",
        topics: "Topics",
        video: "Video",
        live: "Live",
        search: "Search",
        menu: "Menu",
      },
    },
    tr: {
      translation: {
        news: "Haberler",
        features: "Özellikler",
        topics: "Konular",
        video: "Video",
        live: "Canlı",
        search: "Ara",
        menu: "Menü",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
