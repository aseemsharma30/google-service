import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, NavbarText } from 'reactstrap';
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
  <div>
  <Navbar
    color="light"
    expand="md"
    fixed="top"
    full
    light
  >
    <NavbarBrand href="/">
      Home
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Sign Up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">
            Log In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        Log In
      </NavbarText>
    </Collapse>
  </Navbar>
</div>

);

export default Header;
