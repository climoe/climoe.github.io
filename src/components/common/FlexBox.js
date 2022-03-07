import styled from 'styled-components'
import { media } from './MediaQueries'

export const FlexSection = styled.section`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;


    justify-content: space-around;
    margin: 8rem 4rem;

    ${media.tablet`
        flex-direction: column;
    `};
`;

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


