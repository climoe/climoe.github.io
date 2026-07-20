import React, { ComponentPropsWithRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { PrinterIcon } from '@phosphor-icons/react';
import { useReactToPrint } from 'react-to-print';

import { LanguageContextProvider } from '@/components/context/LanguageContext';
import { LanguageSwitch } from '@/components/button/switch/LanguageSwitch';

import Colors from '@/components/common/colors';
import GlobalStyles from '@/components/common/global-styles';

import { CourseList } from '@/components/courses/CoursesList';
import { Education } from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import { Identity } from '@/components/identity/Identity';
import Skills from '@/components/skills/Skills';
import Head from '@/components/common/head';
import DefaultInput from '@/components/field/DefaultInput';
import { FlexRowCenter } from '@/components/common/flexbox';


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
    return (
      <div {...props}>
      </div>)
  }


const CV = () => {

  const printRef = useRef<HTMLDivElement>(null);
  const [companyName, setCompanyName] = useState('');
  const useHandlePrint = () => useReactToPrint({
    contentRef:  printRef,
    pageStyle:  '@page {\n        size: A4;\n        margin: .5in 0 .5in !important;\n    }\n\n    @page:first{\n        margin-top: 0;\n    }',
    documentTitle: 'CV - Kamil Klimczak'
  });

  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  return (
    <>
      <GlobalStyles />
      <Head />
      <FlexRowCenter>
        <DefaultInput value={companyName} onChange={handleChangeCompanyName} />
        <PrinterIcon size={'4rem'} color={`${Colors.PURPLE}`} weight="duotone" onClick={useHandlePrint()} />
      </FlexRowCenter>
      <LanguageContextProvider>
        <LayoutWithRef ref={printRef}>
          <Printable>
            <LanguageSwitch sticky={true} />
            <Identity />
            <Experience />
            <Education />
            <Skills />
            <CourseList />
            <ProcessingAgree>
                            <span>
                                "I consent to the processing by {companyName} my personal data included in my CV for the purposes of the recruitment process and further recruitment processes"
                            </span>
            </ProcessingAgree>
          </Printable>
        </LayoutWithRef>
      </LanguageContextProvider>
    </>
  );
};
export default CV;