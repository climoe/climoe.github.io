import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';
import { Content } from '../layout/Layout';
import { media } from '../common/MediaQueries';
import { Atom, HeartStraight } from 'phosphor-react';

const FooterWrapper = styled.div`
  background: ${Colors.DARKEST};
  color: ${Colors.WHITE};
  padding: ${props => (props.big ? '21rem' : props.medium ? '10rem' : '8rem')} 0 6rem 0;
  ${media.tablet`
    padding: ${props => (props.big ? '15rem' : props.medium ? '10rem' : '12.8rem')} 2rem 5rem 2rem;`
  }
`;

const Copyright = styled.p`
  text-align: center;
  box-align: initial;
`;

const Footer = ({ big, medium }) => (
  <FooterWrapper {...big && { big }} {...medium && { medium }}>
    <Content>
      <Copyright white align="center">
        Content made with  <Atom size= {24}/> and <HeartStraight weight= "fill" color="red" size={24} alignmentBaseline="center"/>
      </Copyright>
      <Copyright>
        ©climoe 2022. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
