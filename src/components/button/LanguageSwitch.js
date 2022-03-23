import React, {
    useCallback, 
    useState
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { LanguageContextProvider, useLanguageContext } from "../context/LanguageContext";


export const LanguageSwitch = () => {
    
    const [isEn, setIsEn] = useState(true);

    const languageContext = useLanguageContext();

    const toggleSwitch = useCallback(() => {
            setIsEn(!isEn); 
            languageContext.update()
            console.log("useCallback of toggleSwitch called")
        },[isEn, languageContext]
    )

    const LanguageSwitchStyle = styled.div`
        display: flex;
        justify-content: flex-start;

        height: 2.5rem;
        width: 5rem;
        padding: .5rem;

        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 1);

        cursor: pointer;

        &[data-isen="true"] {
            justify-content: flex-end;
        }

        .handle {
            display: flex;
            width: 2.5rem;
            height: 2.5rem;
            background-color: #FF33CC;
            border-radius: 2.5rem;
            font-size: 0.8rem;
            font-weight: 700;

            align-items: center;
            align-content: center;
            justify-content: space-around;
            text-align: center;
        }
    `;
    
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    return (
        <LanguageContextProvider>
                <LanguageSwitchStyle data-isen={isEn} onClick={toggleSwitch}> 
                    <motion.div className="handle" layout transition={spring}>PL\EN</motion.div>
                </LanguageSwitchStyle>   
         </LanguageContextProvider>
    )
}