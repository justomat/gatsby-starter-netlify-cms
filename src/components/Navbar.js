import React from "react"
import Link from "gatsby-link"

import github from "../img/github-icon.svg"
import logo from "../img/logo.svg"
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  NavbarBurger,
  NavbarStart,
  NavbarEnd,
  NavbarDropdown
} from "bloomer"
import { Container } from "bloomer/lib/layout/Container"

import "./Navbar.sass"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarActive: false,
      lang: props.lang
    }
  }

  onClickNav = () => {
    this.setState((state, props) => ({
      isNavbarActive: !state.isNavbarActive
    }))
  }

  render() {
    return (
      <Nav isTransparent={true}>
        <Container>
          <NavbarBrand>
            <NavbarItem>WIKA</NavbarItem>
            <NavbarBurger
              isActive={this.state.isNavbarActive}
              onClick={this.onClickNav}
            />
          </NavbarBrand>
          <NavbarMenu
            isActive={this.state.isNavbarActive}
            onClick={this.onClickNav}
          >
            <NavbarStart />
            <NavbarEnd>
              <NavbarItem>
                <Link to="/">Home</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/about">About</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="/contact">Contact</Link>
              </NavbarItem>
              {/* <NavbarItem hasDropdown isHoverable>
              <NavbarLink href="#">lang</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href="#">ID</NavbarItem>
                <NavbarItem href="#">EN</NavbarItem>
              </NavbarDropdown>
            </NavbarItem> */}
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Nav>
    )
  }
}

export default Navbar
