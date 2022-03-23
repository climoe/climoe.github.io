import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Helmet from 'react-helmet';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../common/GlobalStyles';
import { LanguageContextProvider } from '../context/LanguageContext';
import { Print } from '../button/Button';


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
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  return(
    <>
      <GlobalStyles />
      <Helmet
          title={"Kamil Klimczak - CV Portfolio"}
          meta={[
            {
              name: 'Kamil',
              content: 'Portfolio built using Gatsby and React'
            },
            {
              name: 'keywords',
              content: 'portfolio'
            }
          ]}
      >
        <html lang="en" />
      </Helmet>
      <LanguageContextProvider>
        <Header handlePrint = {handlePrint}/>
        <LayoutWithRef ref={componentRef}>{children}</LayoutWithRef>
        <Footer />
      </LanguageContextProvider>
    </>
  )
}
