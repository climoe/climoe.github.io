'use client'

import React, { ComponentPropsWithoutRef, useContext, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import { LanguageContext } from '@/components/context/language-context';
import Hero from '@/components/header/hero';
import Footer from '@/components/footer/footer';


function LayoutWithRef(props: ComponentPropsWithoutRef<'div'>) {
  return <div {...props}>{props.children}</div>
}

export function PageLayout({ children }): React.ReactNode {


  const [language, setLanguage] = useState<string>('en');

  const updateLanguage = () => {
    setLanguage(language => language === "en" ? "pl" : "en")
  };

  const languageContext = useContext(LanguageContext)

  const componentRef: React.RefObject<"div"> = useRef<"div">(null)
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
    contentRef: componentRef.current,
    pageStyle: pageStyle,
    //copyStyles: true,
    documentTitle: 'CV - Kamil Klimczak'
  })

  return (
    <LanguageContext value={languageContext}>
      <Hero />
      <LayoutWithRef ref={componentRef}>
        {children}
      </LayoutWithRef>
      <Footer handlePrint={handlePrint} />
    </LanguageContext>
  )
}