"use client";

import { createContext } from "react";

export type LanguageContextProps = {
  language: string;
  switch: (newValue: string) => string;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  switch: (language: string) => (language === "en" ? "pl" : "en"),
});

export default LanguageContext;
