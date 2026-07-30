import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Loader from '@/public/images/loader.svg'

const LoaderWrapper = styled.section`

    width: 100vw;    
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoaderStyle = styled.div`

    width: 40rem;
    height: 20rem;
`;

const Preloader = () => {
    return (
        <LoaderWrapper>
            <LoaderStyle>
               <Loader/>;
            </LoaderStyle>
        </LoaderWrapper>
    )
}

export default Preloader;