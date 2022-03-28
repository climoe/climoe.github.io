import React from 'react';
import styled from 'styled-components';
import { Atom, HeartStraight, Printer, TwitterLogo, LinkedinLogo, MediumLogo } from 'phosphor-react';

import { contentMax } from '../common/Mixins';
import { media } from '../common/MediaQueries';
import Colors from '../common/Colors';

import waves from '../../static/images/waves.svg';
import { graphql, useStaticQuery } from 'gatsby';

const Copyright = styled.p`
  text-align: right;
  font-weight: 700;
  box-align: initial;
`;

const Accesibility = styled.p`
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

  padding: 8rem 2rem 2rem 0;
  ${media.tablet`
    padding: 12rem 2rem 5rem 2rem;`
  }
`;  


export const Footer = ({handlePrint}) => {
  const socialsQuery = graphql`
    query Socials{
      markdownRemark(frontmatter: {id: {eq: "socials"}}) {
        frontmatter {
          id
          social{
            accounts{
              url
            }
          }
        }
      }   
    }  
  `;

  const data = useStaticQuery(socialsQuery);
  const { accounts } = data.markdownRemark.frontmatter.social
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  
  return (
    <FooterWrapper>
      <Content>
        <Copyright align="right" >
          Content made with <HeartStraight weight= "duotone" color={`${Colors.PINK}`} size={"2rem"} alignmentBaseline="center"/> and <Atom size= {"2rem"} color="#38ACF5" weight='duotone'/> 
        </Copyright>
        <Copyright>
          ©climoe 2022. All rights reserved.
        </Copyright>
        <Accesibility>
          <LinkedinLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(accounts[0].url)}/>
          <TwitterLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(accounts[1].url)}/>
          <MediumLogo size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={onClickUrl(accounts[2].url)}/>
          <Printer size={"3rem"} color={`${Colors.PINK}`} weight="duotone" onClick={handlePrint}/>
        </Accesibility>
      </Content>
    </FooterWrapper>)
};

export default Footer;
