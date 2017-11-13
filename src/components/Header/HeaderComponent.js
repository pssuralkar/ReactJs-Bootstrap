import React, { Component } from 'react';

import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';

class HeaderComponent extends Component {
  render() {
    return (
      <div className={"nav"}>
        <header>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Navbar.Link href="#" className="logo"></Navbar.Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#" active>
                  <span className="menu-icon home">
                    <Glyphicon glyph="glyphicon glyphicon-user"></Glyphicon>
                  </span>
                  <span>Home</span>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <span className="menu-icon payments">
                    <Glyphicon glyph="glyphicon glyphicon-book"></Glyphicon>
                  </span>
                  <span>Payments</span>
                </NavItem>

                <NavItem eventKey={3} href="#">
                  <span className="menu-icon spending">
                    <Glyphicon glyph="glyphicon glyphicon-equalizer"></Glyphicon>
                  </span>
                  <span>Spending</span>
                </NavItem>

                <NavItem eventKey={4} href="#">
                  <span className="menu-icon products">
                    <Glyphicon glyph="glyphicon glyphicon-briefcase"></Glyphicon>
                  </span>
                  <span>Products</span>
                </NavItem>

                <NavItem eventKey={5} href="#">
                  <span className="menu-icon help">
                    <Glyphicon glyph="glyphicon glyphicon-cd"></Glyphicon>
                  </span>
                  <span>Help</span>
                </NavItem>
                <NavItem>
                  <Button className="logout">Logout</Button>
                </NavItem>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
        </header>
        <style type="text/css">{`
          .navbar-default{
            border-bottom:2px solid #ccec82 !important;
            background: none !important;
          }

          .active a{
            border-bottom:2px solid #9cdd1c;
            background-color: #f7f7f7 !important;
            margin-bottom: -2px;
          }

          .navbar-nav>li>a {
            padding: 15px 30px !important;
          }

          .menu-icon{
            margin: 10px auto;
            display: block;
            text-align: center;
            padding: 0 10px;
          }

          .logo{
            padding:28px 20px;
          }

          .logout{
            margin-top:15px;
          }

        `}</style>

      </div>
    );
  }
}

export default HeaderComponent;
