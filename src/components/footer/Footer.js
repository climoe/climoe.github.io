import React from 'react';
import styled from 'styled-components';
import { Atom, HeartStraight } from 'phosphor-react';

import { contentMax } from '../common/Mixins';
import { media } from '../common/MediaQueries';

import waves from '../../static/images/waves.svg';

const Copyright = styled.p`
  text-align: right;
  font-weight: 700;
  box-align: initial;
`;

const Content = styled.div`
  ${contentMax}
`;

const FooterWrapper = styled.div`
  background-image: url('${waves}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  padding: 8rem 0 6rem 0;
  ${media.tablet`
    padding: 12rem 2rem 5rem 2rem;`
  }
`;  


const Footer = () => (
  <FooterWrapper>
    <Content>
      <Copyright align="right" >
        Content made with  <Atom size= {"2rem"} color="#38ACF5"/> and <HeartStraight weight= "fill" color="#FF33CC" size={"2rem"} alignmentBaseline="center"/>
      </Copyright>
      <Copyright>
        ©climoe 2022. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
