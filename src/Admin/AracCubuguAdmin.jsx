import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import { AiFillBackward } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (

      <div className="row">
        <div className="col-lg-4">
          <SideNav expanded={this.state.isVisible}>
            <SideNav.Toggle
              onClick={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <AiFillHome style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText><NavLink style={{}} to='/Admin/anasayfa'>Anasayfa</NavLink></NavText>


              </NavItem>
              <NavItem eventKey="placed orders">
                <NavIcon>
                  <AiFillBackward
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText> <NavLink to='/Admin/odaekle'>Odalar</NavLink></NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>

        </div>


      </div>
    );
  }
}

export default SideNavBar;