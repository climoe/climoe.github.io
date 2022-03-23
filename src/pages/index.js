import React from 'react';
import styled from 'styled-components';

import { wrapper, contentMax } from '../components/common/Mixins';
import { Header1, Header2, Paragraph, LargeParagraph } from  '../components/common/Typography';
import { FlexRowSection } from '../components/common/FlexBox';
import Colors from '../components/common/Colors';
import PageStructure from '../components/layout/Layout';
import { ViteSection } from '../components/layout/ViteSection';
import { AnimatedSection } from '../components/content/AnimatedSection';
import { TitleQuestion } from '../components/content/TitleQuestion';
import { MainTitle } from '../components/content/MainTitle';
import { LifetimeEvent } from '../components/content/LifetimeEvent';
import Dev from '../components/content/Dev';
import { print } from '../components/common/MediaQueries';

import splash from '../static/images/splash.svg';
import splash2 from '../static/images/splash2.svg';
import Consult from '../components/content/Consult';
import Analyze from '../components/content/Analyze';
import { Identity } from '../components/identity/Identity';



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

  ${print`
       background: white;
  `}
`;


const CareerSection = styled.section`

  background-image: url("${splash2}");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

  ${print`
       background: white;
  `}

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
            <Identity printing={true}/>
          </FlexRowSection>
        </IntroSection>
        <Content>
          <TitleQuestion/>
          <Header2 primary align="center" bold className="portfolio">
            Lifetime Events
          </Header2>
        </Content>
        
        <CareerSection>
          <AnimatedSection>
            <ViteSection title={"Lifetime Events"}>
              <LifetimeEvent/>
            </ViteSection>
          </AnimatedSection>
          <AnimatedSection>
            <ViteSection>
              <Header2 bold>Placeholder website</Header2>
              <Paragraph>Lorem ipsum</Paragraph>
              <Paragraph>Dolor sit amet</Paragraph>
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
            </ViteSection>
            <Analyze/>
          </AnimatedSection>
        </CareerSection>
      </PageStructure>
    </StyledHompage>
  )
}
