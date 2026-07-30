
import React, { Suspense }  from 'react';
import styled from 'styled-components';

import Colors from '@/components/common/colors';
import PageLayout from '@/app/layout';

import { IntroSection } from '@/components/section/intro-section';
import { CareerSection } from '@/components/section/carrier-section';
import { AnimatedSection } from '@/components/section/animated-section';
import  MainTitle  from '@/components/content/main-title';
import Education  from '@/components/education/education';
import { FlexRowSection } from '@/components/common/flexbox';


import Dev from '@/components/content/dev';
import Consult from '@/components/content/consult';
import Analyze from '@/components/content/analyze';
import Identity from '@/components/identity/identity';
import CourseList from '@/components/courses/course-list';
import Navbar from '@/components/navbar/navbar';
import Preloader from '@/components/common/preloader';
import Experience from '@/components/experience/experience';
import Skills from '@/components/skills/skills';
import { getMainTitleData, getAllCourses, getAllEducationEvents, getAllExperiences, getPersonalData,  getTechnologySkills } from '@/lib/content-loading/content-loading';
import Head from '@/components/common/head';
import GlobalStyles from '@/components/common/global-styles';


const StyledHomepage = styled.div`

    position: relative;
    margin: auto;
    max-width: 140rem;
    background-color: ${Colors.WHITE};
    z-index: 0;
    box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);

    background-attachment: fixed;
    background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);
`;

const Homepage = async () => {

    const mainTitle  = await getMainTitleData()
    const courses  =  await getAllCourses()
    const experiences =  await getAllExperiences()
    const educations  = await getAllEducationEvents()
    const personal  = await getPersonalData()
    const skills = await getTechnologySkills()


    return (
    <Suspense fallback={<Preloader/>}>
        <Head/>
        <GlobalStyles/>
        <StyledHomepage>
            <PageLayout>
                <IntroSection>
                    <FlexRowSection>
                        <MainTitle {...mainTitle}/>
                        <Dev/>                        
                    </FlexRowSection>
                </IntroSection>
                <Navbar/>
                <CareerSection>
                    <AnimatedSection>
                        <Identity {...personal} />
                    </AnimatedSection>
                    <AnimatedSection>
                        <Experience {...experiences} />
                    </AnimatedSection>             
                    <AnimatedSection>
                        <Consult/>
                        <Education {...educations}/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <Skills {...skills} />
                        <Analyze/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <CourseList {...courses}/>
                    </AnimatedSection>
                </CareerSection>
            </PageLayout>
        </StyledHomepage>
      </Suspense>
    )
}
export default Homepage;