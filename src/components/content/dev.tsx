import React from "react";
import styled, { css } from "styled-components";

import { mediaQueries } from "../common/media-queries"

import DevSvg from "../../public/images/dev.inline.svg"

const StyledDev = styled.div`
    flex: 1 1 50%;
    min-height: 25rem;
    align-self: center;
    padding-top: 1rem;
    
    @media print {
        ${css`
            display: none;
        `}
    }

    @media (max-width: '${mediaQueries.tablet}') {
        ${css`
            flex: 1 0 50%;
            min-height: 35rem;
            min-width: 55rem;
        `}
    }
    
    @media (max-width: '${mediaQueries.phone}') {
        ${css`
            flex: 1 0 50%;
            min-height: 30rem;
            min-width: 50rem;
        `}
    }
    
    @media (max-width: '${mediaQueries.sphone2}') {
        ${css`
            display: none;
        `}
    }
`;

export default function Dev(){
    return(
        <StyledDev>
            <DevSvg/>
        </StyledDev>
    )
}