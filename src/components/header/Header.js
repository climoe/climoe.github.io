import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { TerminalWindow } from 'phosphor-react'
import { lighten, darken } from 'polished';
import styled  from 'styled-components';
import { withTheme } from 'styled-components';
import { Burger } from './burger/Burger';
import { Button, HireMe } from '../button/Button';
import Colors from '../common/Colors';
import { contentMax } from '../common/Mixins';
import { media, mediaMin } from '../common/MediaQueries';
import { Paragraph } from '../common/Typography';

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
  ${Paragraph} {
    color: ${props => (props.scrolled) && `${Colors.DARKEST};`}
      ${media.desktop`
        color: ${Colors.WHITE};
      `}
  }
  ${Button} {
    color: ${props => props.scrolled && `${Colors.DARKEST}`};
    border: .1rem solid ${props => props.scrolled && `${Colors.DARKEST}`};
    &:hover {
      color: ${props => props.scrolled && `${lighten(0.3, Colors.DARKEST)}`};
      border: .1rem solid ${props => props.scrolled && `${lighten(0.3, Colors.DARKEST)}`};
    }
    ${media.desktop`
      padding: 1.5rem 2rem;
    `}
    ${media.laptop`
      color: ${Colors.WHITE};
      border: .1rem solid ${Colors.WHITE};
      &:hover {
        color: ${props => props.scrolled && `${darken(0.3, Colors.WHITE)}`};
        border: .1rem solid ${props => props.scrolled && `${darken(0.3, Colors.WHITE)}`};
      }
    `}
  }
  ${HireMe} {
    margin-left: 2rem;
    ${media.laptop`
      margin: 3rem 0 0 0;
    `}
  }
`;

const Logo = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
  /* ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: 0;
  `} */
`;


const HeaderNav = styled.div`
  ${contentMax}
  //position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;


function Header(){
  
  //const [showMobile, setShowMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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


  //const overflow = showMobile ? 'hidden' : 'auto';
  
  return (
    <HeaderWrapper scrolled={scrolled}>
      <Helmet>
        <body style={{ overflow: 'auto' }} />
      </Helmet>
      <HeaderNav>
        <Logo href="/">
          <TerminalWindow size={"8rem"}/>
        </Logo>
        <Burger scrolled={scrolled}/>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default withTheme(Header);