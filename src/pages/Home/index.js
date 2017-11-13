import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import style from '../../styles/Home/home.scss';
import HeaderComponent from '../../components/Header/HeaderComponent';

import PaymentsHeaderComponent from '../../components/Payments/PaymentsHeaderComponent';
import SelectAccountsComponent from '../../components/Payments/SelectAccountsComponent';
import AmountComponent from '../../components/Payments/AmountComponent';


import ReferanceComponent from '../../components/Referance/ReferanceComponent';
import QuicklinksComponent from '../../components/Common/QuicklinksComponent';

import PaymentToComponent from '../../components/StandingOrder/PaymentToComponent';

import SelectDateComponent from '../../components/DatePicker/SelectDateComponent';


class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>

        <PaymentsHeaderComponent/>

        <Grid>
          <Row>
            <Col xs={12} sm={8} md={8} lg={9}>
              <Row>
                <Col xs={12} sm={8} md={8} lg={4}>
                  <SelectAccountsComponent/>
                </Col>
                <Col xs={12} sm={8} md={8} lg={4}>
                  <SelectAccountsComponent/>
                </Col>
                <Col xs={12} sm={8} md={8} lg={4}>
                  <AmountComponent/>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <ReferanceComponent/>
                  <PaymentToComponent/>
                  <SelectDateComponent/>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={4} md={4} lg={3}>
                <QuicklinksComponent/>
            </Col>
            </Row>
            </Grid>
  </div>
    );
  }
}

export default HomePage;
