import React, {
    useCallback, 
    useState
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { LanguageContextProvider, useLanguageContext } from "../context/LanguageContext";

import Colors from "../common/Colors";

export const LanguageSwitch = ({sticky}) => {
    
    const [isEn, setIsEn] = useState(true);

    const languageContext = useLanguageContext();

    const toggleSwitch = useCallback(() => {
            setIsEn(!isEn); 
            languageContext.update()
        },[isEn, languageContext]
    )

    const LanguageSwitchStyle = styled.div`

        display: ${props => props.sticky === true ? 'flex' : 'none'};
        justify-self: flex-end;
        align-self: center;

        height: 4rem;
        width: 8.4rem;
        padding: .4rem;

        background-color: transparent;
        border-radius: 4.4rem;
        border: 2px solid ${Colors.DARKEST};

        cursor: pointer;

        &[data-isen="true"] {
            justify-content: flex-end;
        }

        .handle {
            display: flex;
            width: 4rem;
            height: 4rem;
            background-color: ${Colors.DARKEST};
            border-radius: 50%;
            font-size: 1.2rem;
            font-weight: 500;
            color: ${Colors.WHITE};

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
                <LanguageSwitchStyle sticky={sticky} data-isen={isEn} onClick={toggleSwitch}> 
                    <motion.div className="handle" layout transition={spring}>PL\EN</motion.div>
                </LanguageSwitchStyle>   
         </LanguageContextProvider>
    )
}