import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';

import Colors from '../components/common/Colors';
import PageStructure from '../components/layout/Layout';

import { IntroSection } from '../components/section/IntroSection';
import { CareerSection } from '../components/section/CareerSection';
import { AnimatedSection } from '../components/section/AnimatedSection';
import { TitleQuestion } from '../components/content/TitleQuestion';
import { MainTitle } from '../components/content/MainTitle';
import { Education } from '../components/education/Education';
import { FlexRowSection } from '../components/common/FlexBox';


import Dev from '../components/content/Dev';
import Consult from '../components/content/Consult';
import Analyze from '../components/content/Analyze';
import { Identity } from '../components/identity/Identity';
import { Skills } from '../components/skills/Skills';
import { Experience } from '../components/experience/Experience';
import { CourseList } from '../components/courses/CoursesList';
import Navbar from '../components/navbar/Navbar';
import Preloader from '../components/common/Preloader';
import LayoutCards from '../components/experimental/cardlayout/LayoutCards';
import { ViteSection } from '../components/section/ViteSection';
import Experience2 from '../components/experience/Experience2';
import Skills2 from '../components/skills/Skills2';


const Hompage = () => {

    const [loaded, isLoaded] = useState(false)

    const StyledHompage = styled.div`

        position: relative;
        margin: auto;
        max-width: 140rem;
        background-color: ${Colors.WHITE};
        z-index: 0;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
  
        background-attachment: fixed;
        background-color: rgb(217, 228, 245);
        background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);
    `;

    useEffect(() => {
        setTimeout(() => {
            isLoaded(true)
        }, 3000)
    }, []);

    return (
        <>
        {!loaded ? (
        <Preloader/>
        ):(
        <StyledHompage>
            <PageStructure>
                <IntroSection>
                    <FlexRowSection>
                        <MainTitle/>
                        <Dev/>                        
                    </FlexRowSection>
                </IntroSection>
                <Navbar/>
                <CareerSection>
                    <AnimatedSection>
                        <Identity printing={false}/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <Experience2/>
                    </AnimatedSection>             
                    <AnimatedSection>
                        <Consult/>
                        <Education/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <Skills2/>
                        <Analyze/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <CourseList/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <TitleQuestion/>
                    </AnimatedSection>
                </CareerSection>
            </PageStructure>
        </StyledHompage>
        )}
        </>
    )
}
export default Hompage;