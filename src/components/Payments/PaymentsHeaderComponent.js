import React, { Component } from 'react';

import {Grid, Row, Col, Well, Glyphicon} from 'react-bootstrap';

class PaymentsHeaderComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <h1><Glyphicon glyph="glyphicon glyphicon-credit-card"></Glyphicon> Payments</h1>
              <p className="sub-heading">Pay a bill, a person, an organisation or transfer money</p>
            </Col>
            </Row>
        </Grid>
        <style type="text/css">{`
          .glyphicon{
            color:#44a5b3;
          }
          .glyphicon-credit-card{
            font-size:26px;
          }

        `}</style>
      </div>
    );
  }
}

export default PaymentsHeaderComponent;
