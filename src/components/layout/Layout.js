import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import GlobalStyles from '../common/GlobalStyles';


export const LayoutWrapper = styled.div`
  position: relative; 
`;

const PageStructure = ({ children, theme, bigFooter, mediumFooter, openContactPopup}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'Kamil',
              content:'Portfolio built using Gatsby and React'
            },
            { name: 'keywords',
              content: 'portfolio' 
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header theme={theme} openContactPopup={openContactPopup} />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer big={bigFooter} medium={mediumFooter} openContactPopup={openContactPopup}/>
      </>
    )}
  />
);

PageStructure.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  bigFooter: PropTypes.bool,
  mediumFooter: PropTypes.bool
};

export default PageStructure;
