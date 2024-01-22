import React, { useRef } from 'react';
import Helmet from 'react-helmet';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../common/GlobalStyles';
import { LanguageContextProvider } from '../context/LanguageContext';


const PageStructure = ({children}) => {  
  
  return(
    <>
      <GlobalStyles/>
      <Helmet
          title={"climoe | IT  Software Engineer"}
          meta={[
            {
              name: 'climoe',
              content: 'Portfolio for my IT experience'
            }
          ]}
      >
      <html lang="en" />
      </Helmet>
      <LanguageContextProvider>
        <Header/>
        {children}
        <Footer/>
      </LanguageContextProvider>
    </>
  )
}
export default PageStructure;