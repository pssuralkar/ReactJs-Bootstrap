import React, { Component } from 'react';

import {Grid, Row, Col, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

class PaymentToComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <h4>I want this payment to be...</h4>
              <p className="sub-heading">A repeating payment is also known as a Standing Order.</p>
            </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={12} sm={6} md={6} lg={5}>
                  <FormGroup>
                    <InputGroup className="payment-option active">
                      <InputGroup.Addon>
                        <input type="radio" aria-label="payment to" />
                      </InputGroup.Addon>
                      <span>A one off payment</span>
                    </InputGroup>
                  </FormGroup>
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={5}>
                  <FormGroup className="payment-option">
                    <InputGroup>
                      <InputGroup.Addon>
                        <input type="radio" aria-label="A repeating payment" />
                      </InputGroup.Addon>
                      <span>A repeating payment</span>
                    </InputGroup>
                  </FormGroup>
                    </Col>
                    </Row>
                  </Col>
              </Row>
        </Grid>

        <style type="text/css">{`
          .payment-option{
            border:2px solid #ccc;
            border-radius: 8px;
            padding:8px;
            color:#999;
            line-height: 2;
          }

          .payment-option.active{
            border:2px solid #7f59fc;
            background:#7f59fc !important;
            color:white;
          }

          .input-group-addon{
            background: none !important;
            border: 0px solid gray !important;
          }

        `}</style>


      </div>
    );
  }
}

export default PaymentToComponent;
