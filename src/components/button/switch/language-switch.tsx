import React, {useCallback, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GlobeHemisphereWestIcon, TranslateIcon } from "@phosphor-icons/react";

import {useLanguageContext, LanguageContextProvider} from "@/components/context/language-context";

import "./styles.scss"


export const LanguageSwitch = ({sticky}) => {
    
    const [isEn, setIsEn] = useState(true);
    const languageContext = useLanguageContext();

    const toggleSwitch = useCallback(() => {
            setIsEn(!isEn); 
            languageContext.updateLanguage()
        },[isEn, languageContext]
    )

    return (
        <LanguageContextProvider>
            <div
                role={"button"}
                className={"switch-container"}
                data-sticky={sticky}
                data-darkmode={isEn}
                style={{ justifyContent: isEn ? 'flex-end' : 'flex-start' }}
                onClick={toggleSwitch}
                onKeyDown={toggleSwitch}
                tabIndex={0}>
                <motion.div 
                    layout 
                    className="handle"
                    data-sticky={sticky} >
                    <AnimatePresence initial={false}>
                        <motion.i
                            className={'icon'}
                            key={isEn ? 'en' : 'pl'}
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }} 
                            transition={{ duration: .2 }}
                        >
                        {isEn ?  
                            <GlobeHemisphereWestIcon size={"3rem"}/> :
                            <TranslateIcon size={"3rem"}/> }
                        </motion.i>
                    </AnimatePresence>
                </motion.div>
            </div>   
        </LanguageContextProvider>
    )
}