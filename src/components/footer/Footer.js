import React from 'react';
import styled from 'styled-components';
import { Atom, HeartStraight } from 'phosphor-react';

import Colors from '../common/Colors';
import { contentMax } from '../common/Mixins';
import { media } from '../common/MediaQueries';

import waves from '../../static/images/waves.svg';

const Copyright = styled.p`
  text-align: right;
  box-align: initial;
`;

const Content = styled.div`
  ${contentMax}
`;

const FooterWrapper = styled.div`
  //background: ${Colors.ORANGE_LIGHTER};
  background-image: url('${waves}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  //color: ${Colors.WHITE};
  padding: ${props => (props.big ? '21rem' : props.medium ? '10rem' : '8rem')} 0 6rem 0;
  ${media.tablet`
    padding: ${props => (props.big ? '15rem' : props.medium ? '10rem' : '12rem')} 2rem 5rem 2rem;`
  }
`;  


const Footer = ({ big, medium }) => (
  <FooterWrapper {...big && { big }} {...medium && { medium }}>
    <Content>
      <Copyright align="right">
        Content made with  <Atom size= {24}/> and <HeartStraight weight= "fill" color="red" size={24} alignmentBaseline="center"/>
      </Copyright>
      <Copyright>
        ©climoe 2022. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
