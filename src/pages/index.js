import React from 'react';
import styled from 'styled-components';

import Colors from '../components/common/Colors';
import PageStructure from '../components/layout/Layout';

import { IntroSection } from '../components/section/IntroSection';
import { CareerSection } from '../components/section/CareerSection';
import { AnimatedSection } from '../components/section/AnimatedSection';
import { TitleQuestion } from '../components/content/TitleQuestion';
import { MainTitle } from '../components/content/MainTitle';
import { LifetimeEvent } from '../components/section/LifetimeEvent';
import { FlexColumnJustifiedEnd, FlexRow, FlexRowSection } from '../components/common/FlexBox';
import { Header1, LargeParagraph } from  '../components/common/Typography';
import { LanguageSwitch } from '../components/button/LanguageSwitch';


import Dev from '../components/content/Dev';
import Consult from '../components/content/Consult';
import Analyze from '../components/content/Analyze';
import { Identity } from '../components/identity/Identity';
import { Skills } from '../components/skills/Skills';
import { Experience } from '../components/experience/Experience';
import { CourseList } from '../components/courses/CoursesList';


export default function Hompage(){

    const StyledHompage = styled.div`

        position: relative;
        margin: auto;
        max-width: 140rem;
        overflow: hidden;
        background-color: ${Colors.WHITE};
        z-index: 0;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);
  
        background-attachment: fixed;
        background-color: rgb(217, 228, 245);
        background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);

        ${LargeParagraph} {
            margin-bottom: 2.8rem;
        }
        ${Header1} {
            margin: 0 0 2rem 0;
        }
    `;

    return (
        <StyledHompage>
            <PageStructure>
                <IntroSection>
                    <FlexRowSection>
                        <MainTitle/>
                        <Dev/>
                        <Identity printing={true}/>
                    </FlexRowSection>
                </IntroSection>
                <FlexColumnJustifiedEnd>
                    <LanguageSwitch label="Język"/>
                </FlexColumnJustifiedEnd>
                <CareerSection>
                    <AnimatedSection>
                        <Experience/>
                    </AnimatedSection>             
                    <AnimatedSection>
                        <Consult/>
                        <LifetimeEvent/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <Skills/>
                        <Analyze/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <FlexRow>
                            <TitleQuestion/>
                        </FlexRow>
                    </AnimatedSection>
                    <AnimatedSection>
                        <CourseList/>
                    </AnimatedSection>
                </CareerSection>
            </PageStructure>
        </StyledHompage>
    )
}