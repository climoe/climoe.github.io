import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../components/common/Mixins';
import * as t from '../components/common/Typography';
import Layout from '../components/layout/Layout';
import HireMePopup from '../components/about/HireMePopup.js';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 157px 0 100px 0;
`;

const NotFoundPageWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.Header1} {
    margin: 0 0 20px 0;
  }
`;

class NotFoundPage extends React.Component {
  state = {
    openHireMePopup: false
  };

  closeContactPopup = () => {
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
      <NotFoundPageWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.Header1 green align="center">
              404
            </t.Header1>
            <t.Header3 align="center" max45>
              Not found
            </t.Header3>
          </AboveFold>
        </Layout>
        <HireMePopup
          open={openHireMePopup}
          handleClose={this.closeContactPopup}
        />
      </NotFoundPageWrapper>
    );
  }
}

export default NotFoundPage;
