import React from 'react';
import styled from 'styled-components';
import { Atom, HeartStraight, Printer } from 'phosphor-react';

import { contentMax } from '../common/Mixins';
import { media } from '../common/MediaQueries';
import Colors from '../common/Colors';

import waves from '../../static/images/waves.svg';

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


export const Footer = () => {
  
  return (
    <FooterWrapper>
      <Content>
        <ContentBy align="right" >
          Content made with <HeartStraight size={"2rem"} color={`${Colors.PINK}`}/> and <Atom size= {"2rem"} color="#38ACF5"/> 
        </ContentBy>
        <Copyright>
          ©climoe 2022. All rights reserved.
        </Copyright>
      </Content>
    </FooterWrapper>)
};

export default Footer;
