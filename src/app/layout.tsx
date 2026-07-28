'use client'

import React, { useContext, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import Head from '@/components/common/head';
import GlobalStyles from '@/components/common/global-styles';
import { LanguageContext } from '@/components/context/language-context';
import Hero from '@/components/header/hero';
import Footer from '@/components/footer/footer';

type DivProps = React.HTMLProps<HTMLDivElement>

const LayoutWithRef =
  React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  return (
    <div ref={ref}>
      {props.children}
    </div>
  )
})

export const PageLayout = ({ children }) : React.ReactNode => {


  // const [language, setLanguage] = useState<string>('en');
  //
  // const updateLanguage = () => {
  //   setLanguage(language => language === "en" ? "pl" : "en")
  // };

  const language = useContext(LanguageContext)

  const componentRef: React.RefObject<any> = useRef<HTMLDivElement>(null)
  const pageStyle = `
      @page {
        size: A4;
        margin: .5in 0 .5in !important;
      }

      @page:first{
        margin-top: 0;
      } 
`;

  const handlePrint = useReactToPrint({
    contentRef:  componentRef.current,
    pageStyle: pageStyle,
    //copyStyles: true,
    documentTitle: 'CV - Kamil Klimczak'
  })

  return (
    <LanguageContext value={language}>
      <Head/>
      <GlobalStyles />
      <Hero/>
      <LayoutWithRef ref={componentRef}>
         {children}
      </LayoutWithRef>
      <Footer handlePrint={handlePrint} />
    </LanguageContext>
  )
};

export default PageLayout;