import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import DatePickerComponent from './DatePickerComponent';

class SelectDateComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <h4>Use the date picker to select when you want this to happen. Alternatively, enter it in the format DD/MM/YYYY.</h4>
              <p className="sub-heading">A repeating payment is also known as a Standing Order.</p>
            </Col>
            <Col xs={9} sm={3} md={2}>
              <DatePickerComponent/><br/>
            </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default SelectDateComponent;
