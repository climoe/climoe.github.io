import React from 'react';
import styled from 'styled-components';

import { wrapper, contentMax } from '../components/common/Mixins';
import { Header1, Header2, Paragraph, LargeParagraph } from  '../components/common/Typography';
import { FlexRowSection } from '../components/common/FlexBox';
import Colors from '../components/common/Colors';
import PageStructure from '../components/layout/Layout';
import { ViteSection } from '../components/layout/ViteSection';
import { LinkButton } from '../components/button/Button';
import { AnimatedSection } from '../components/content/AnimatedSection';
import { TitleQuestion } from '../components/content/TitleQuestion';
import { MainTitle } from '../components/content/MainTitle';
import { LifetimeEvent } from '../components/content/LifetimeEvent';
import Dev from '../components/content/Dev';

import splash from '../static/images/splash.svg';
import splash2 from '../static/images/splash2.svg';
import Consult from '../components/content/Consult';
import Analyze from '../components/content/Analyze';



//------------------------------------------------------
const IntroSection = styled.section`
  padding: 6rem 0;
  margin: 0 auto;
  
  background-image: url("${splash}");
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  ${Header1} {
    color: ${Colors.DARKEST};
  }

  ${LargeParagraph} {
    padding: 0 3rem;
  }
`;


const CareerSection = styled.section`

  background-image: url("${splash2}");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

`;

export const Content = styled.div`
  ${contentMax}
`;

const StyledHompage = styled.div`
  ${wrapper}

  background-attachment: fixed;
  background-color: rgb(217, 228, 245);
  background-image: linear-gradient(315deg, rgb(217, 228, 245) 0%, rgb(245, 227, 230) 74%);

  .who-desc {
    display: block;
    margin: 0 auto 6rem auto;
    max-width: 90%;
  }
  ${LargeParagraph} {
    margin-bottom: 2.8rem;
  }
  ${Header1} {
    margin: 0 0 2rem 0;
  }
  .avatar {
    margin: 0 auto 5rem auto;
    display: block;
  }
  .link {
    padding: 0;
    color: ${Colors.DARKEST};
    text-decoration: underlined;
    svg {
      margin-left: 0.7rem;
    }
  }
  .portfolio {
    margin: 10rem 0 5rem 0;
    font-size: 4.2rem;
  }
`;

const RelativeDiv = styled.div`
  position: relative;
`;

//---------------------------------------



export default function Homepage(){
     
  return (
    <StyledHompage>
      <PageStructure>
        <IntroSection>
          <FlexRowSection>
            <MainTitle/>
            <Dev/>
          </FlexRowSection>
          </IntroSection>
        <Content>
          <TitleQuestion/>
          <RelativeDiv align="center" max45>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </RelativeDiv>
          <Header2 primary align="center" bold>
            Lorem ipsum
          </Header2>
          <Paragraph align="center" max70 className="who-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
          <Header2 primary align="center" bold className="portfolio">
            Lifetime Events
          </Header2>
        </Content>
        
        <CareerSection>
          <AnimatedSection>
            <ViteSection>
              <LifetimeEvent/>
            </ViteSection>
          </AnimatedSection>
          <AnimatedSection>
            <ViteSection>
              <Header2 bold>Placeholder website</Header2>
              <Paragraph>Lorem ipsum</Paragraph>
              <Paragraph>Dolor sit amet</Paragraph>
              <LinkButton primary bold className="link" as="a"
                target="_blank"
                href="#">
                  Lorem ipsum
              </LinkButton>
            </ViteSection>    
          </AnimatedSection>              
          <AnimatedSection>
            <Consult/>
            <ViteSection>
              <Header2 bold>Placeholder website</Header2>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Dolor sit amet</Paragraph>
              <LinkButton primary bold className="link" as="a"
                target="_blank"
                href="#">
                Lorem ipsum
              </LinkButton>
            </ViteSection>
          </AnimatedSection>
          <AnimatedSection>
            <ViteSection>
              <Header2 bold>Placeholder website</Header2>
              <Paragraph>Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
              <LinkButton primary bold className="link" as="a"
                target="_blank"
                href="#">
                Lorem ipsum
              </LinkButton>
            </ViteSection>
            <Analyze/>
          </AnimatedSection>
        </CareerSection>
      </PageStructure>
    </StyledHompage>
  )
}
