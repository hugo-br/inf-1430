import { Locales } from "./locales";

import en from "./en.json";
import fr from "./fr.json";
import LocalStorageService from "../services/LocalStoreService";

export const messages = {
  [Locales.EN]: en,
  [Locales.FR]: fr,
};

export const defaultLocale = (): string => {
  const lang = LocalStorageService.getLanguage();
  return lang ?? "fr";
};
