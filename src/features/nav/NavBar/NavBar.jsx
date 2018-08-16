import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="assets/logo.png" alt="logo" />
          </Menu.Item>
          <Menu.Item name="DASHBOARD" />
          <Menu.Item name="EMPLOYEES" />
          <Menu.Item name="GROUPS" />
          <Menu.Item name="TRAVELS" />
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;