'use client'
import React, { ComponentPropsWithRef, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { PrinterIcon } from '@phosphor-icons/react';
import { useReactToPrint } from 'react-to-print';

import  LanguageContext  from '@/components/context/language-context';
import { LanguageSwitch } from '@/components/button/switch/language-switch';

import Colors from '@/components/common/colors';
import GlobalStyles from '@/components/common/global-styles';

import CourseList  from '@/components/courses/course-list';
import Education from '@/components/education/education';
import Experience from '@/components/experience/experience';
import Identity from '@/components/identity/identity';
import Skills from '@/components/skills/skills';
import Header from '@/components/common/header';
import DefaultInput from '@/components/field/default-input';
import { FlexRowCenter } from '@/components/common/flexbox';
import { getAllCourses, getAllEducationEvents, getAllExperiences, getMainTitleData, getPersonalData, getTechnologySkills } from '@/lib/content-loading/content-loading';


const Printable = styled.main`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.WHITE};
`;

const ProcessingAgree = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-style: italic;
    color: ${Colors.GREY};
    text-align: center;
`;

function LayoutWithRef(props: ComponentPropsWithRef<"div">) {
    return (<div {...props}>{props.children}</div>)
}



export default async function CV() {

  const printRef = useRef<HTMLDivElement>(null);
  const [companyName, setCompanyName] = useState('');
  const language = useContext(LanguageContext);
  const useHandlePrint = () => useReactToPrint({
    contentRef:  printRef,
    pageStyle:  '@page {\n        size: A4;\n        margin: .5in 0 .5in !important;\n    }\n\n    @page:first{\n        margin-top: 0;\n    }',
    documentTitle: 'CV - Kamil Klimczak'
  });

  const mainTitle  =  getMainTitleData()
  const courses  =   getAllCourses()
  const experiences =   getAllExperiences()
  const educations  =  getAllEducationEvents()
  const personal  =  getPersonalData()
  const skills =  getTechnologySkills()



  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <FlexRowCenter>
        <DefaultInput value={companyName} onChange={handleChangeCompanyName} />
        <PrinterIcon size={'4rem'} color={`${Colors.PURPLE}`} weight="duotone" onClick={useHandlePrint()} />
      </FlexRowCenter>
      <LanguageContext value={language}>
        <LayoutWithRef ref={printRef}>
          <Printable>
            <LanguageSwitch sticky={true} />
            <Identity identity={personal}/>
            <Experience experiences={experiences} />
            <Education education={educations}/>
            <Skills skillset={skills}/>
            <CourseList courses={courses}/>
            <ProcessingAgree>
                <span>
                    "I consent to the processing by my personal data included in my CV for the purposes of the recruitment process and further recruitment processes"
                </span>
            </ProcessingAgree>
          </Printable>
        </LayoutWithRef>
      </LanguageContext>
    </>
  );
};