import React, {
    useCallback, 
    useState
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { LanguageContextProvider, useLanguageContext } from "../context/LanguageContext";

import Colors from "../common/Colors";

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
        align-self: flex-start;

        height: 5rem;
        width: 8rem;
        padding: .5rem;

        background-color: transparent;
        border-radius: 5rem;
        border: 1px solid ${Colors.PINK};

        cursor: pointer;

        &[data-isen="true"] {
            justify-content: flex-end;
        }

        .handle {
            display: flex;
            width: 5rem;
            height: 5rem;
            background-color: ${Colors.PINK};
            border-radius: 5rem;
            font-size: 1.6rem;
            font-weight: 700;
            color: ${Colors.DARKEST};

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