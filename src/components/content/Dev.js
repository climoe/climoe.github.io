import React from "react";
import styled from "styled-components";

import { media } from "../common/MediaQueries" 

import DevSvg from "../../static/images/dev.inline.svg"

const StyledDev = styled.div`
    flex: 1 1 50%;
    min-height: 25rem;
    align-self: center;
    padding-top: 1rem;

${media.tablet`
    flex: 1 0 50%;
    min-height: 35rem;
    min-width: 55rem;
`}

${media.phone`
    flex: 1 0 50%;
    min-height: 30rem;
    min-width: 50rem;
`}

${media.sphone`
    display: none;
`}
`;

export default function Dev(){
    return(
        <StyledDev>
            <DevSvg/>
        </StyledDev>
    )
}