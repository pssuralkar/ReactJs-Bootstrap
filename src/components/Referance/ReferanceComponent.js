import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import ReferanceInputComponent from './ReferanceInputComponent';

class ReferanceComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <h2>Reference</h2>
              <p className="sub-heading">A note to help you remember why you moved this money. This will appear in your transactions list and statement.</p>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <ReferanceInputComponent/>
            </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default ReferanceComponent;
