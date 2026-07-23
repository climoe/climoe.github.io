import React, {
    createContext, 
    useState, 
    useContext
} from "react";

let languageContext:React.Context<object> = createContext<object>(null);

export const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState<string>('en');

    const updateLanguage = () => {
        setLanguage(language => language === "en" ? "pl" : "en")
    };
    
    return (
        <languageContext.Provider value={{language: language, update: updateLanguage}}>
            {children}
        </languageContext.Provider>
    )

};

interface LanguageContext {
    language: string;
    updateLanguage:  () => string;
}


export const useLanguageContext : () => LanguageContext = () => {
    let context: LanguageContext  = useContext<object>(languageContext) as LanguageContext;

    if(context === undefined) {
        throw new Error("useLanguageContext was used outside of its provider")
    }

    return context;
};
