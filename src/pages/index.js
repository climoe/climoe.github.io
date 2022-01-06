import { graphql } from 'gatsby';
import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../components/common/Mixins';
import {Header1, Header2, Paragraph, LargeParagraph} from  '../components/common/Typography';
import Layout, { Content } from '../components/layout/Layout';
import AnimatedSection from '../components/content/DivWrapper';
import { TitleQuestion } from '../components/content/TitleQuestion';
import { LifetimeEvent } from '../components/content/LifetimeEvent';
import { HireMe, LinkButton } from '../components/button/Button.js';
import HireMePopup from '../components/about/HireMePopup.js';
import { media } from '../components/common/MediaQueries';
import Colors from '../components/common/Colors';
import programming from '../images/programming-ilustration.svg'
import prototyping from '../images/prototyping-ilustration.svg'

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 14rem 0 6rem 0;
  ${Header1} {
    color: ${Colors.DARKEST};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.LIGHT)};
    background-color: ${Colors.LIGHT};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 10rem 4rem;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 4rem 1rem;
  `};
  ${Paragraph} {
    margin-top: 1rem;
  }
  ${Header2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
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
    /* max-width: 200px; */
    /* width: 80%; */
    margin: 0 auto 5rem auto;
    /* border-radius: 50%; */
    display: block;
    /* ${media.tablet`max-width: 70%;`} */
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

const WorkWithMe = styled.div`
  padding: 8rem;
  width: 73%;
  border-radius: 0.6rem;
  box-shadow: 0 0.2px 2.6rem 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -15rem auto;
  ${LargeParagraph} {
    max-width: 80%;
    margin: 0 auto 2.8rem auto;
  }
  ${media.tablet`
    width: auto;
    padding: 4rem;
    margin: 5rem 3rem -10rem 3rem;
  `};
`;




const StyledImage = styled.img`
  width: 40%;
  padding: 0 2rem;
  height: 24rem;
  ${media.phone
    `display: none;`
  }
  ${media.sphone
    `display: none;`
  }
`;

const RelativeDiv = styled.div`
  position: relative;
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    return (
          <HomepageWrapper>
            <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
              <AboveFold>
                <RelativeDiv>
                  <StyledImage src={programming} alt="programming"/>
                  <StyledImage src={prototyping} alt="prototyping"/>
                </RelativeDiv>
                <RelativeDiv>
                  <TitleQuestion/>
                </RelativeDiv>
                <Header2 bold primary align="center">
                  Kamil Klimczak
                </Header2>
                <RelativeDiv align="center" max45>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </RelativeDiv>
                <HireMe large onClick={this.openContactPopup} book>
                  Hire me
                </HireMe>
              </AboveFold>
              <Content>
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
              <Block>
                <BlockContent>
                  <LifetimeEvent/>
                </BlockContent>
              </Block>
              <Block>
                <BlockContent>
                  <AnimatedSection>
                    <Header2 bold>Placeholder website</Header2>
                    <Paragraph>Lorem ipsum</Paragraph>
                    <Paragraph>Dolor sit amet</Paragraph>
                    <LinkButton primary bold className="link" as="a"
                      target="_blank"
                      href="#">
                        Lorem ipsum
                    </LinkButton>
                  </AnimatedSection>
                </BlockContent>
              </Block>
              <Block>
                <BlockContent>
                  <AnimatedSection>
                    <Header2 bold>Placeholder website</Header2>
                    <Paragraph>Lorem ipsum</Paragraph>
                    <Paragraph>Dolor sit amet</Paragraph>
                    <LinkButton primary bold className="link" as="a"
                      target="_blank"
                      href="#">
                      Lorem ipsum
                    </LinkButton>
                  </AnimatedSection>
                </BlockContent>
              </Block>
              <Block>
                <BlockContent>
                  <AnimatedSection>
                    <Header2 bold>Placeholder website</Header2>
                    <Paragraph>Lorem ipsum</Paragraph>
                    <Paragraph>Dolor sit amet</Paragraph>
                    <LinkButton primary bold className="link" as="a"
                      target="_blank"
                      href="#">
                      Lorem ipsum
                    </LinkButton>
                  </AnimatedSection>
                </BlockContent>
              </Block>
              <WorkWithMe>
                <Header1 green>Get in touch with me</Header1>
                <LargeParagraph>
                    Fancy working with me? Contact me for more info!{' '}
                </LargeParagraph>
                <HireMe onClick={this.openContactPopup} book>
                    Contact me
                </HireMe>
              </WorkWithMe>
            </Layout>
            <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
          </HomepageWrapper>
        );
  }
}

export default Homepage;

export const pageQuery = graphql`
    query {
      avatarHomepage: file(relativePath: { eq: "textural-background-3.jpg" }) {
        ...fluidImage
      }
    }
`;
