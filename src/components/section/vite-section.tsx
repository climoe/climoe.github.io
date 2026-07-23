import React from "react";
import styled, {css} from "styled-components";

import {mediaQueries} from '../common/media-queries';

const StyledViteSection = styled.section`
    display: flex;
    flex-direction: column;
    
    flex: 1 0 50%;


    margin: 0 4rem;
    margin-top: 4rem;
    padding: 2rem;

    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: .8rem;
    
    
    @media (max-width: '${mediaQueries.tablet}') {
        ${css`
            margin-top: 2rem;
            flex: 1 1 100%;
        `}
    }

    @media print {
        ${css`
            margin-top: 0;
            padding: 0;
        `}
    }
    
    &:hover{
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const StyledSectionTitle = styled.h1`
    margin-top: 1rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    
    font-size: 4rem;
    font-weight: 500;

    page-break-inside: avoid;
`;

interface ViteSectionProps {
  title:  string,
  id?: string,
}

export const ViteSection= (props: React.PropsWithChildren<ViteSectionProps>) =>   {
    return  (
        <StyledViteSection id={props.id}>
            <StyledSectionTitle>
              {props.title}
            </StyledSectionTitle>
            {props.children}
        </StyledViteSection>
    )
}