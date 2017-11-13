import React, { Component } from 'react';

import {PanelGroup, Panel} from 'react-bootstrap';

class SelectAccountsComponent extends Component {
  render() {
    return (
      <div>
        <Panel>
          <h3>B Current Account</h3>
          <p>Bobs account</p>
          <p>£10,550586</p>
        </Panel>

        <style type="text/css">{`
          .panel-default {
            border:2px solid #7f59fc;
            border-radius: 8px;
          }
          h3{
            font-size: 20px;
            margin:0 !important;
            font-weight: 400;
          }
          p {
            margin: 1px 0;
          }

        `}</style>
        </div>

    );
  }
}

export default SelectAccountsComponent;
