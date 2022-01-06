import React from 'react';
import Helmet from 'react-helmet';
import { TerminalWindow } from 'phosphor-react'
import { lighten, darken } from 'polished';
import styled  from 'styled-components';
import { withTheme } from 'styled-components';
import { Burger } from './burger/Burger';
import { Button, HireMe } from '../button/Button';
import Colors from '../common/Colors';
import * as Mixins from '../common/Mixins';
import { media, mediaMin } from '../common/MediaQueries';
import { Paragraph } from '../common/Typography';

const HeaderWrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 140rem;
  height: 6rem;
  min-height: 3rem;
  z-index: 2;
  padding: 2rem 0 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: ${Colors.WHITE};
  background: ${props => (props.scrolled ? `${Colors.WHITE};` : 'transparent')};
  animation: ${props => (props.scrolled ? 'fadein' : 'fadeout')} 0.2s;
  ${props => props.scrolled && 'box-shadow: 0 .2rem 2.4rem 0 rgba(0, 0, 0, 0.1);'}
  ${Paragraph} {
    color: ${props => (props.scrolled || props.theme === 'white') && `${Colors.DARKEST};`}
      ${media.desktop`
        color: ${Colors.WHITE};
      `}
  }
  ${Button} {
    color: ${props => props.scrolled && `${Colors.DARKEST}`};
    border: .1rem solid ${props => props.scrolled && `${Colors.DARKEST}`};
    &:hover {
      color: ${props => props.scrolled && `${lighten(0.3, Colors.DARKEST)}`};
      border: .1rem solid ${props => props.scrolled && `${lighten(0.3, Colors.DARKEST)}`};
    }
    ${media.desktop`
      padding: 1.5rem 2rem;
    `}
    ${media.laptop`
      color: ${Colors.white};
      border: .1rem solid ${Colors.WHITE};
      &:hover {
        color: ${props => props.scrolled && `${darken(0.3, Colors.WHITE)}`};
        border: .1rem solid ${props => props.scrolled && `${darken(0.3, Colors.WHITE)}`};
      }
    `}
  }
  ${HireMe} {
    margin-left: 2rem;
    ${media.laptop`
      margin: 3rem 0 0 0;
    `}
  }
`;

const Logo = styled.a`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(90deg, #FF6633 0%, #FF33CC 100%);
  /* ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: 0;
  `} */
`;

// const MenuList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: none;
//   height: 48px;
//   li {
//     display: inline-block;
//     position: relative;
//   }
//   ${mediaMin.desktop`
//     display: block;
//   `}
//   .mobile-only {
//     display: none;
//   }
//   ${media.desktop`
//     position: fixed;
//     height: auto;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(255,255,255,0.5);
//     backdrop-filter: saturate(180%) blur(10px);
//     text-align: center;
//     padding: 0;
//     z-index: 10;
//     padding-top: 20px;
//     ${props =>
//       props.showMobile &&
//       `
//       display: block;
//       .mobile-only {
//         display: block;
//       }
//     `}
//     li {
//       display: list-item;
//       font-size: 20px;
//     }
//     ${Button} {
//       margin-top: 20px;
//     }
//   `}
// `;

const HeaderNav = styled.div`
  ${Mixins.contentMax}
  //position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;


class Header extends React.Component {
  state = {
    showMobile: false,
    scrolled: false
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    const { theme } = this.props;
    this.setState({
      theme
    });
  }

  handleBurgerClick = () => {
    this.setState({ showMobile: true });
  };

  handleClose = () => {
    this.setState({ showMobile: false });
  };

  handleScroll = () => {
    let doc = document.documentElement;
    let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (scrollTop >= 100) {
      this.setState({ scrolled: true });
    } else if (scrollTop < 100) {
      this.setState({ scrolled: false });
    }
  };

  openContactPopup = () => {
    this.props.openContactPopup();
  };

  render() {
    const { showMobile, scrolled, theme } = this.state;
    const overflow = showMobile ? 'hidden' : 'auto';
    return (
      <HeaderWrapper theme={theme} scrolled={scrolled}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <HeaderNav>
          <Logo href="/">
            <TerminalWindow size={"8rem"}/>
          </Logo>
          <Burger/>
        </HeaderNav>
      </HeaderWrapper>
    );
  }
}

export default withTheme(Header);