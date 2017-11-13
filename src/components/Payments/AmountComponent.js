import React, { Component } from 'react';

import {Form, Col, InputGroup, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class AmountComponent extends Component {
  render() {
    return (
      <div>
        <FormGroup controlId="formValidationSuccess4" validationState="success">
          <InputGroup className="selectedAmount">
            <InputGroup.Addon>£</InputGroup.Addon>
            <span className="totalAmount">400.00</span>
          </InputGroup>
        </FormGroup>

        <style type="text/css">{`
          .selectedAmount{
            height:100px;
            border:2px solid #7f59fc;
            border-radius: 8px;
          }

          .selectedAmount .input-group-addon{
            background:#7f59fc !important;
            color:white !important;
            padding:0 25px !important;
          }
          .selectedAmount .totalAmount{
            vertical-align: bottom;
            height: 100%;
            position: absolute;
            top: 40%;
            left: 35%;
            }

        `}</style>
      </div>
    );
  }
}

export default AmountComponent;
