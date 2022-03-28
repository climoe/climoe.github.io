import React from "react";
import styled from "styled-components";

import { media, print } from "../common/MediaQueries";

import ConsultSvg from "../../static/images/consult.inline.svg";


const StyledConsult = styled.div`
    flex: 1 1 50%;
    min-height: 25rem;
    align-self: center;
    margin-bottom: 4rem;

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

    ${print`
        display: none;
    `}
`;

export default function Consult(){

    return (
        <StyledConsult>
            <ConsultSvg/>
        </StyledConsult>
    )
}