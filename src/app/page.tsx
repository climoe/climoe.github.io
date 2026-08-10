import React, { Suspense } from "react";
import styled from "styled-components";

import { IntroSection } from "@/components/section/intro-section";
import { CareerSection } from "@/components/section/carrier-section";
import { FlexRowSection } from "@/components/common/flexbox";
import { AnimatedSection } from "@/components/section/animated-section";

import MainTitle from "@/components/content/main-title";
import Education from "@/components/education/education";
import Dev from "@/components/content/dev";
import Consult from "@/components/content/consult";
import Analyze from "@/components/content/analyze";
import Identity from "@/components/identity/identity";
import CourseList from "@/components/courses/course-list";
import Navbar from "@/components/navbar/navbar";
import Preloader from "@/components/common/preloader";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import {
  getAllCourses,
  getAllEducationEvents,
  getAllExperiences,
  getMainTitleData,
  getPersonalData,
  getTechnologySkills,
} from "@/lib/content-loading/content-loading";

const StyledHomepage = styled.div`
  position: relative;
  margin: auto;
  max-width: 140rem;
  background-color: var(--cv-color-white);
  z-index: 0;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61, 66, 80, 0.18);

  background-attachment: fixed;
  background-image: linear-gradient(
    315deg,
    rgb(217, 228, 245) 0%,
    rgb(245, 227, 230) 74%
  );
`;

export default async function HomePage() {
  const mainTitle = getMainTitleData();
  const courses = getAllCourses();
  const experiences = getAllExperiences();
  const educations = getAllEducationEvents();
  const personal = getPersonalData();
  const skills = getTechnologySkills();

  return (
    <Suspense fallback={<Preloader />}>
      <StyledHomepage>
        <IntroSection>
          <FlexRowSection>
            <MainTitle mainTitle={mainTitle} />
            <Dev />
          </FlexRowSection>
        </IntroSection>
        <Navbar />
        <CareerSection>
          <AnimatedSection>
            <Identity identity={personal} />
          </AnimatedSection>
          <AnimatedSection>
            <Experience experiences={experiences} />
          </AnimatedSection>
          <AnimatedSection>
            <Consult />
            <Education education={educations} />
          </AnimatedSection>
          <AnimatedSection>
            <Skills skillset={skills} />
            <Analyze />
          </AnimatedSection>
          <AnimatedSection>
            <CourseList courses={courses} />
          </AnimatedSection>
        </CareerSection>
      </StyledHomepage>
    </Suspense>
  );
}
