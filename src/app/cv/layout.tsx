'use client'

import React, { ComponentPropsWithRef, useContext, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import CssVar from '@thadathilsinan/cssvar';

import { LanguageContext } from '@/components/context/language-context';
import GlobalStyles from '@/components/common/global-styles';
import Header from '@/components/common/header';
import { FlexRowCenter } from '@/components/common/flexbox';
import DefaultInput from '@/components/field/default-input';
import { PrinterIcon } from '@phosphor-icons/react';
import PageLayout from '@/app/layout';
import styled from 'styled-components';



function LayoutWithRef(props: ComponentPropsWithRef<"div">) {
  return <div {...props}>{props.children}</div>
}

const Printable = styled.main`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cv-color-white);
`;

const ProcessingAgree = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-style: italic;
    color: var(--cv-color-grey);
    text-align: center;
`;


export function CVLayout({children}): React.ReactNode {

  const languageContext = useContext(LanguageContext)
  const [companyName, setCompanyName] = useState('');

  const pageStyle = `
      @page {
        size: A4;
        margin: .5in 0 .5in !important;
      }

      @page:first{
        margin-top: 0;
      } 
`;
  const printRef = useRef<HTMLDivElement>(null);
  const useHandlePrint = () => useReactToPrint({
    contentRef:  printRef,
    pageStyle:  pageStyle,
    documentTitle: 'CV - Kamil Klimczak'
  });

  const handleChangeCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const darkest = new CssVar().get("--cv-color-darkest");

  return (
    <>
      <GlobalStyles />
      <Header />
      <FlexRowCenter>
        <DefaultInput value={companyName} onChange={handleChangeCompanyName} />
        <PrinterIcon size={'4rem'} color={darkest} weight="duotone" onClick={useHandlePrint()} />
      </FlexRowCenter>
      <LanguageContext value={languageContext}>
        <LayoutWithRef ref={printRef}>
          <Printable>
            {children}
            <ProcessingAgree>
                <span>
                    "I consent to the processing by my personal data included in my CV for the purposes of the recruitment process and further recruitment processes"
                </span>
            </ProcessingAgree>
          </Printable>
        </LayoutWithRef>
      </LanguageContext>
    </>
  )
}
export default PageLayout;