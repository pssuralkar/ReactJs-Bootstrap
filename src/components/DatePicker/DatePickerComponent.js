import React, { Component } from 'react';

import {ControlLabel, FormControl, FormGroup, Tooltip, Overlay} from 'react-bootstrap';

class DatePickerComponent extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel srOnly>{"Referance"}</ControlLabel>
          <FormControl
            type="date"
            placeholder="29 03 17"
          />
          <Tooltip placement="right" className="in" id="overload-right"  bsStyle="danger">
            Tooltip right
          </Tooltip>
        </FormGroup>

        <style type="text/css">{`
          .tooltip.right{
            padding: 0 5px;
            margin-left: 3px;
            float: right;
            position: absolute;
            right: -80px;
            top: 6px;
          }

        `}</style>
        </div>





    );
  }
}

export default DatePickerComponent;
