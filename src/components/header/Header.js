import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { TerminalWindow } from 'phosphor-react'
import styled  from 'styled-components';

import { LanguageSwitch } from '../button/LanguageSwitch';
import { Print } from '../button/Button';
import { Burger } from './burger/Burger';
import Colors from '../common/Colors';
import { contentMax } from '../common/Mixins';
import { useLanguageContext } from '../context/LanguageContext';

const HeaderWrapper = styled.div`
  max-width: 140rem;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  min-height: 3rem;
  padding: 2rem 0 4rem;
  z-index: 999;
  color: ${Colors.WHITE};
  background: ${props => (props.scrolled ? `${Colors.WHITE};` : 'transparent')};
  animation: ${props => (props.scrolled ? 'fadein' : 'fadeout')} 0.2s;
  ${props => props.scrolled && 'box-shadow: 0 .2rem 2.4rem 0 rgba(0, 0, 0, 0.1);'}
  
`;

const Logo = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
`;


const HeaderNav = styled.div`
  ${contentMax}
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;


export default function Header({handlePrint}){
  
  const [scrolled, setScrolled] = useState(false)

  const languageContext = useLanguageContext()
  const printLabel = languageContext?.language === 'en' ? "PRINT" : "DRUKUJ";
  
  useEffect(() => {
    
    const handleScroll = (event) => {
      const doc = event.target;
      const pageOffset = window.pageYOffset;
      let scrollTop = (pageOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (scrollTop >= 100) {
        setScrolled(true)
      } else if (scrollTop < 100) {
        setScrolled(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
  
  }, [scrolled])
  
  return (
    <HeaderWrapper scrolled={scrolled}>
      <Helmet>
        <body style={{ overflow: 'auto' }} />
      </Helmet>
      <HeaderNav>
        <Logo href="/">
          <TerminalWindow size={"8rem"}/>
        </Logo>
        <Print scrolled={scrolled} onClick={handlePrint}>{printLabel}</Print>
        <LanguageSwitch scrolled={scrolled}/>
        <Burger scrolled={scrolled}/>
      </HeaderNav>
    </HeaderWrapper>
  );
}
