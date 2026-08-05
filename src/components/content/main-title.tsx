'use client'

import React, { JSX, use, useContext } from 'react';
import  styled , { css }  from "styled-components";
import  Colors  from "@/components/common/colors";

import { LanguageContext } from "@/components/context/language-context";
import { LanguageProps, ReturnProps } from '@/lib/content-loading/content-types';

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

export default function MainTitle( { mainTitle}: { mainTitle: Promise<ReturnProps<LanguageProps>>}): JSX.Element {

    const languageContext = useContext(LanguageContext)
    const title = use(mainTitle)
    const { first, second }  = languageContext.language === "en" ? title.frontmatter.language.en : title.frontmatter.language.pl;

    return (
        <StyledMainTitle>
            {first}<span>{second}</span>
        </StyledMainTitle>
    );
};