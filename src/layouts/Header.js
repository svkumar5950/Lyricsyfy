import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar color="info" dark>
        <NavbarBrand className="mx-auto" href="/">
          Lyricsyfy
        </NavbarBrand>
      </Navbar>
    );
  }
}
