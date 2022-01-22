import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {background:#300D6E;height : 105px }
  a, .navbar-nav, .navbar-light .nav-link {
    color: 	white;
    &:hover { color: white; };
    width : -166px;
    height : -164 px
  }
  .logo-image{
    width: 166px;
    height: 166px;
    overflow: hidden;
    margin-top: 116px;
    margin-below: 36px;
}
  .navbar-brand {
    font-size: 1.4em;
    color:  white;
    &:hover { color: white; }
    height : 166px
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
const Header = () => (
  <Styles >
    <Navbar expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>

      <div class="logo-image">
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default Header;
