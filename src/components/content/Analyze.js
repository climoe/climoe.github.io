import React from "react";
import styled from "styled-components";

import { media } from '../common/MediaQueries';

import AnalyzeSvg from '../../static/images/analyze.inline.svg';

const StyledAnalyzed = styled.div`
    flex: 1 1 50%;
    min-height: 25rem;
    align-self: center;
    margin-bottom: 2rem;

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

export default function Analyze(){

    return (
        <StyledAnalyzed>
            <AnalyzeSvg/>
        </StyledAnalyzed>
    )
}