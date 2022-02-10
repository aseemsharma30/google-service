import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText } from 'reactstrap';
//import styled from 'styled-components';

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
