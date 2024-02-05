import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../common/GlobalStyles';
import { LanguageContextProvider } from '../context/LanguageContext';
import {Head} from "../common/Head";


const PageStructure = ({children}) => {  
  
  return(
    <>
      <GlobalStyles/>
      <Head/>
      <LanguageContextProvider>
        <Header/>
        {children}
        <Footer/>
      </LanguageContextProvider>
    </>
  )
}
export default PageStructure;