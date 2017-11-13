import React, { Component } from 'react';

import {Panel, Glyphicon} from 'react-bootstrap';

const title = (
  <h3><Glyphicon glyph="glyphicon glyphicon-globe"></Glyphicon> Quick Links</h3>
);

class QuicklinksComponent extends Component {
  render() {
    return (
      <div>
        <Panel header={title} className={"asideLinks"}>
          <ul>
            <li><a href="/">Direct Debits and Standing Orders</a></li>
            <li><a href="/">Alerts and sweeps</a></li>
            <li><a href="/">Statments</a></li>
          </ul>
        </Panel>

        <style type="text/css">{`
          .asideLinks.panel{
            border-color:#e54c88 !important;
          }
          .asideLinks .panel-heading{
            background:#e54c88 !important;
            boder:none;
          }
          .asideLinks h3{
            color:white;
          }
          .asideLinks .glyphicon-globe{
            color:white;
            font-size: 22px;
            vertical-align: bottom;
            margin-right: 8px;
          }

          .asideLinks ul{
            margin: 0;
            list-style: none;
            padding: 0 ;
          }

          .asideLinks ul li a{
            padding: 8px 0;
            display: block;
            color:#5c5c5c;
          }

        `}</style>
      </div>
    );
  }
}

export default QuicklinksComponent;
