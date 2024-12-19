import { createI18n } from "vue-i18n";

import EN from "./en";
import AR from "./ar";

let i18n;

export const SUPPORT_LOCALES = ["en", "ar"];

export default function setupI18n() {
  if (!i18n) {
    let locale = localStorage.getItem("lang") || "en";

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: "en",
      messages: {
        en: EN,
        ar_: AR,
      },
    });
  }
  return i18n;
}
