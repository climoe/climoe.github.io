import  React  from "react";
import loadFrontmatter, { MDXFilesPath } from '@/content/content-loading';
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

type LanguageProps = {
  en: {
    first: string,
    second: string
  }
  pl: {
    first: string,
    second: string
  }
}

type MainTitleProps = {
  id: string,
  language: LanguageProps,
}


    
export const MainTitle = async () => {


    const languageContext = useLanguageContext()
    const metadata: MainTitleProps = await loadFrontmatter(MDXFilesPath.MainTitle)
    const { first, second} = languageContext.language === "en"? metadata.language.en : metadata.language.pl;

    return (
        <StyledMainTitle>
            {first}<span>{second}</span>
        </StyledMainTitle>
    );
};