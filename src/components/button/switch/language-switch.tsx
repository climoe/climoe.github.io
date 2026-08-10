"use client";

import React, { useCallback, useContext, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { GlobeHemisphereWestIcon, TranslateIcon } from "@phosphor-icons/react";
import { LanguageContext } from "@/components/context/language-context";
import languageSwitch from "./language-switch.module.css";

export const LanguageSwitch = ({ sticky }) => {
  const [isEn, setIsEn] = useState(true);
  const languageContext = useContext(LanguageContext);

  const toggleSwitch = useCallback(() => {
    setIsEn(!isEn);
    languageContext.switch(languageContext.language);
  }, [isEn, languageContext]);

  return (
    <LanguageContext value={languageContext}>
      <div
        role={"button"}
        className={languageSwitch["switchContainer"]}
        data-sticky={sticky}
        data-darkmode={isEn}
        style={{ justifyContent: isEn ? "flex-end" : "flex-start" }}
        onClick={toggleSwitch}
        onKeyDown={toggleSwitch}
        tabIndex={0}
      >
        <motion.div
          layout
          className={languageSwitch["handle"]}
          data-sticky={sticky}
        >
          <AnimatePresence initial={false}>
            <motion.i
              className={languageSwitch["icon"]}
              key={isEn ? "en" : "pl"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isEn ? (
                <GlobeHemisphereWestIcon size={"3rem"} />
              ) : (
                <TranslateIcon size={"3rem"} />
              )}
            </motion.i>
          </AnimatePresence>
        </motion.div>
      </div>
    </LanguageContext>
  );
};
