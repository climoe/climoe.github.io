import React from 'react';
import { TerminalWindow } from 'phosphor-react'
import styled  from 'styled-components';

import Colors from '../common/Colors';

const HeaderStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: 140rem;
    margin: auto;
    height: 8rem;
    z-index: 2;
    background-color: transparent;
`;

const Logo = styled.a`
    display: inline-block;
    width: 6.4rem;
    height: 6.4rem;
    margin: 1rem; 
    border-radius: 50%;
    background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
    color: ${Colors.DARKEST};
    cursor: pointer;
    text-decoration: none;
    animation: rotate 0.7s ease-in-out 0.5s;
  `;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo href="/">
        <TerminalWindow size={"6.4rem"}/>
      </Logo>
    </HeaderStyle>
  );
}

export default Header;