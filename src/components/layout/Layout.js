import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Helmet from 'react-helmet';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../common/GlobalStyles';
import { LanguageContextProvider } from '../context/LanguageContext';


export const LayoutWithRef = React.forwardRef((props, ref) => {
  const {children} = props
  return (
    <div ref={ref}>
      {children}
    </div>
  )
})


export default function PageStructure({children}){  
  
  const componentRef = useRef()

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
    content: () => componentRef.current,
    pageStyle:  () => pageStyle,
    copyStyles: true,
    documentTitle: 'CV - Kamil Klimczak' 
  })

  return(
    <>
      <GlobalStyles/>
      <Helmet
          title={"Kamil Klimczak - CV Portfolio"}
          meta={[
            {
              name: 'Kamil',
              content: 'Portfolio built using Gatsby and React'
            }
          ]}
      >
        <html lang="en" />
      </Helmet>
      <LanguageContextProvider>
        <Header/>
        <LayoutWithRef ref={componentRef}>
          {children}
        </LayoutWithRef>
        <Footer handlePrint={handlePrint} />
      </LanguageContextProvider>
    </>
  )
}
