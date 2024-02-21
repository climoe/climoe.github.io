import  React  from "react";
import { graphql, useStaticQuery } from "gatsby";
import  styled  from "styled-components";

import  Colors  from "../common/Colors";
import { print } from "../common/MediaQueries"

import { useLanguageContext } from "../context/LanguageContext";

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
        background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
    }

    ${print`
        display: none;
    `} 
`;

const mainTitleQuery = graphql`
        query MainTitle{
            markdownRemark(frontmatter: {id: {eq: "main-title"}}) {
                frontmatter {
                    id
                    language{
                        pl{
                            first
                            second
                        }
                        en{
                            first
                            second
                        }
                    }
                }
            }   
        }
    `;


    
export const MainTitle = () => {


    const languageContext = useLanguageContext()
    const data  = useStaticQuery(mainTitleQuery);
    const { first, second} = languageContext.language === "en"? data.markdownRemark.frontmatter.language.en : data.markdownRemark.frontmatter.language.pl;

    return (
        <StyledMainTitle>
            {first}<span>{second}</span>
        </StyledMainTitle>
    );
};