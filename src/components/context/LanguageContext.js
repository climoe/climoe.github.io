import React, {
    createContext, 
    useState, 
    useContext
} from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState('en');

    const updateLanguage = () => {
        console.log("Current value of language: ", language)
        setLanguage(language => language === "en" ? "pl" : "en")
        console.log("Value of language after state change: ", language)

    };
    
    return (
        <LanguageContext.Provider value={{language: language, update: updateLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);

    if(context === undefined) {
        console.log("useLanguageContext was used outside of its provider");
        throw new Error("useLanguageContext was used outside of its provider")
    }

    return context;
}
