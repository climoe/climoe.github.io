import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Header3 } from '../common/Typography';
import Colors from '../common/Colors';
import { media } from '../common/MediaQueries';
import Helmet from 'react-helmet';
import {X} from 'phosphor-react';

const HireMePopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.5);
  backdrop-filter: saturate(180%) blur(10px);
  z-index: 1000;
  display: flex;
  flex-direction: row;
  ${props =>
    props.open === false &&
    `
    display: none;
  `}
  ${media.tablet`
    flex-direction: column;
    overflow-y: auto;
  `};
`;

const Link = styled.a`
  font-size: 18px;
  padding: 16px 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    display: block;
    padding: 0;
    margin: 0 30px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: saturate(180%) blur(10px);
  `};
`;

const Burger = styled.div`
  width: 56px;
  height: 56px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.DARKEST};
  z-index: 2;
  color: ${props => props.scrolled && Colors.DARKEST};
  &:hover {
    ${props =>
      props.scrolled || props.theme === 'white'
        ? lighten(0.3, Colors.DARKEST)
        : darken(0.1, Colors.WHITE)};
    cursor: pointer;
    opacity: 0.9;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

class HireMePopup extends React.Component {
  closePopup = e => {
    this.props.handleClose(false);
  };

  render() {
    const { open } = this.props;
    const overflow = open ? 'hidden' : 'auto';
    return (
      <HireMePopupWrapper open={open}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <ContentWrapper>
          <Burger onClick={this.closePopup}>
            <X size={56} alt= "Close popup"/>
          </Burger>
          <Header3>Contact me on</Header3>
          <Link primary bold
            target="_blank"
            href="https://www.linkedin.com/">
          </Link>
        </ContentWrapper>
      </HireMePopupWrapper>
    );
  }
}

export default HireMePopup;
