import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./myStyles.css";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar

          expand="lg"
          className="topnav"
        >
          <Navbar.Brand href="">ara bul</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;
