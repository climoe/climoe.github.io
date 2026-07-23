import  React  from "react";
import  { frontMatter as metadata}  from "@/content/main/main-title.mdx";
import  styled , { css }  from "styled-components";
import  Colors  from "@/components/common/colors";

import { useLanguageContext } from "@/components/context/language-context";

const StyledMainTitle = styled.p`
    
    margin-top: 2rem;
    font-size: 5rem;
    overflow: hidden;
    color: ${Colors.DARKEST};
    font-weight: 500;
    flex: 1 1 50%;

    span  {
        font-size: 5rem;
        font-weight: 500;
        background: linear-gradient(90deg, #FF33CC 0%, #793BEEFF 100%);
    }

    @media print {
        ${css`
            display: none;
        `}
    }
`;

    
export const MainTitle = () => {


    const languageContext = useLanguageContext()
    const { first, second} = languageContext.language === "en"? metadata.language.en : metadata.language.pl;

    return (
        <StyledMainTitle>
            {first}<span>{second}</span>
        </StyledMainTitle>
    );
};