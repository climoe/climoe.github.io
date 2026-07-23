import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Head from '@/components/common/head';

import Header from '../header/header';
import Footer from '../footer/footer';
import GlobalStyles from '../common/global-styles';
import { LanguageContextProvider } from '../context/language-context';


type DivProps = React.HTMLProps<HTMLDivElement>

const LayoutWithRef = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  return (
    <div  ref={ref}>
      {props.children}
    </div>
  )
})


export const PageStructure = ({children}) => {

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
    <>
      <GlobalStyles />
      <Head>
      </Head>
      <LanguageContextProvider>
        <Header />
        <LayoutWithRef ref={componentRef}>
          {children}
        </LayoutWithRef>
        <Footer handlePrint={handlePrint} />
      </LanguageContextProvider>
    </>
  )
}