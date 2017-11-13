import React, { Component } from 'react';

import {form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class ReferanceInputComponent extends Component {
  render() {
    return (

      <FormGroup bsSize="large">
        <ControlLabel srOnly>{"Referance"}</ControlLabel>
        <FormControl type="text" placeholder="Enter referance"/>
      </FormGroup>
    );
  }
}

export default ReferanceInputComponent;
