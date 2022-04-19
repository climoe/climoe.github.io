import React from "react";
import styled from "styled-components";

import { media } from "../common/MediaQueries";

const StyledViteSection = styled.section`
    display: flex;
    flex-direction: column;
    
    flex: 1 0 50%;

    margin: 0 2rem;
    margin-top: 4rem;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: .8rem;

    ${media.tablet`
        margin-top: 2rem;
        flex: 1 1 100%;
    `};

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
`;

export function ViteSection({children, title, id}){
    return(
        <StyledViteSection id={id}>
            <StyledSectionTitle>
                {title}
            </StyledSectionTitle>
            {children}
        </StyledViteSection>
    )
}