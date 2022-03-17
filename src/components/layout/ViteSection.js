import React from "react";
import styled from "styled-components";

import { media } from "../common/MediaQueries";

const StyledViteSection = styled.section`
    display: flex;
    flex-direction: column;
    
    flex: 1 0 50%;

    margin: 0 5rem;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-radius: .8rem;

    ${media.tablet`
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
    font-weight: 700;
`;

export function ViteSection({children}){
    return(
        <StyledViteSection>
            <StyledSectionTitle>
                Testowy tytuł 
            </StyledSectionTitle>
            {children}
        </StyledViteSection>
    )
}