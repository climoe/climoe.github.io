import styled from 'styled-components'
import { media } from './MediaQueries'

export const FlexRowSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem 2rem;

    justify-content: space-around;
    margin: 1rem 4rem;

    ${media.tablet`
        margin: 4rem 4rem;
        flex-direction: column;
    `};
`;

export const FlexColumnSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-between;

`;

export const FlexRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FlexColumnDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


