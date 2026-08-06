import React from 'react';
import styled, { css } from 'styled-components';
import { AtomIcon, HeartStraightIcon, PrinterIcon } from '@phosphor-icons/react';
import CssVar from '@thadathilsinan/cssvar';

import { contentMax } from '@/components/common/mixins';
import { mediaQueries } from '@/components/common/media-queries';


const Copyright = styled.p`
  text-align: center;
  font-weight: 500;
  margin-top: 0;
`;

const ContentBy = styled.p`
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
`;


const Content = styled.div`
  ${contentMax}
`;

const FooterWrapper = styled.div`
  background-image: url("${'@/public/images/waves.svg'}");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  padding: 10rem 2rem 2rem 0;


  @media (max-width: '${mediaQueries.tablet}') {
    ${css`
      padding: 12rem 2rem 2rem 2rem;
    `}
  }
`;  


export const Footer = ({handlePrint}) => {

  const cssVar = new CssVar();
  const pink = cssVar.get("--cv-color-pink")

  return (
    <FooterWrapper>
      <Content>
        <ContentBy>
          Content made with <HeartStraightIcon size={"2rem"} color={pink}/> and <AtomIcon size= {"2rem"} color="#38ACF5"/>
        </ContentBy>
        <Copyright>
          ©climoe 2026. All rights reserved.
          <PrinterIcon size={"2rem"} color={pink} weight="duotone" onClick={handlePrint}/>
        </Copyright>
      </Content>
    </FooterWrapper>)
};

export default Footer;
