import React from 'react';
import styled from 'styled-components';
import { AtomIcon, HeartStraightIcon, PrinterIcon } from '@phosphor-icons/react';

import { contentMax } from '../common/mixins';
import { media } from '../common/media-queries';
import Colors from '../common/colors';

import waves from '../../public/images/waves.svg';

const Copyright = styled.p`
  text-align: center;
  font-weight: 500;
  box-align: initial;
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
  background-image: url('${waves}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  padding: 10rem 2rem 2rem 0;
  ${media.tablet`
    padding: 12rem 2rem 2rem 2rem;`
  }
`;  


export const Footer = ({handlePrint}) => {
  
  return (
    <FooterWrapper>
      <Content>
        <ContentBy align="right" >
          Content made with <HeartStraightIcon size={"2rem"} color={`${Colors.PINK}`}/> and <AtomIcon size= {"2rem"} color="#38ACF5"/>
        </ContentBy>
        <Copyright>
          ©climoe 2026. All rights reserved.
          <PrinterIcon size={"2rem"} color={`${Colors.PINK}`} weight="duotone" onClick={handlePrint}/>
        </Copyright>
      </Content>
    </FooterWrapper>)
};

export default Footer;
