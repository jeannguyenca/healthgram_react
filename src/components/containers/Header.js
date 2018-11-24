import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Container,
  Col,
  Row
} from "reactstrap";
import Styled from "styled-components";

import logoMobile from "../../assets/logoMobile.png";
import logoDesktop from "../../assets/logoDesktop.png";

const AppBar = Styled(Navbar)`
  z-index: 1000;
  transition: all .1s linear;
  margin-top: 30px;
  padding-bottom: .5px !important;
  height: 70px;
  top: 0;

  .container{
    padding: 0;
    div{
      padding: 0;
    }
  }

  .navbar{
    padding: 0 !important;
    margin: auto !important;
  }

  .navbar-brand {
    a {
      display: flex;
      flex-flow: row nowrap;
      padding: 0;

      span {
        color: ${props => props.headFontColor}
      }
      .ad {
        display: none;

        @media screen and (min-width: 600px){
          display: block;
        }
      }
      &:hover {
        text-decoration: none
        span {
          color: white;
        }
      }
    }
  }

  .navbar-nav{
    text-align: right;
    background-color: white;
  }

  .nav-item {
    font-size: 16px;
    margin: 0 5px 0 5px;
    padding: 6px;

    .nl {
      color: #0080F7 !important;
        &: hover {
          padding-bottom: 0;
          border-bottom: 1px solid #0080F7;
          // color: blue !important;
          transition: all .5s ease-in;
      }
    }

  }
  .navbar-toggler{
    background-color: #0080F7;

  }

  .logoPart{
    .logoDesktop{
      display:none

    }
    .logoMobile{
      img{
        width: 50px;
        height: 50px;
      }
    }
  }



@media screen and ( min-width: 700px ){
  .logoPart{
    .col{
      padding: 0;

    }
    .logoDesktop{
      display:initial;
      width:100%;
      height: auto;
      margin: 6px 6px 6px 4px;
      padding: 6px 6px 6px 12px;
      img{
        width: 220px;
        height: 41px;
      }
    }
    .logoMobile{
      display: none;
    }
  }
  .menuBar{
    display: none;
  }

  .navbar-nav{
    background-color: transparent;
  }

  .nl{
    padding: auto 6px
    margin: auto 6px;
  }
  .signIn{
    padding: 0px 5px;
    margin-top: -3px;
    width: 120px;
    
  }

}
`;

export default class Example extends React.Component {
  state = {
    isOpen: false,
    lastScrollY: "",
    headColor: "transparent",
    headFontColor: "hsla(100,100%,100%,.8)",
    mobColor: "hsla(0, 0%, 0%, .5)"
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleScroll = () => {
    window.scrollY > 100
      ? this.setState({
          headColor: "rgb(2, 21, 27)",
          headFontColor: "white",
          mobColor: "rgb(2, 21, 27)"
        })
      : this.setState({
          headColor: "hsla(100, 100%, 100%, 1)",
          headFontColor: "hsla(100,100%,100%,.8)",
          mobColor: "hsla(0, 0%, 0%, 0)"
        });
    //}
    //}
  };

  componentDidMount() {
    this.setState({ lastScrollY: window.scrollY });
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { headFontColor, headColor, isOpen } = this.state;
    return (
      <Container fluid={true}>
        <AppBar dark expand="md">
          <Container>
            <Col xs="2">
              <NavbarBrand className="logoPart" href="/">
                <Row>
                  <Col>
                    <figure className="logoMobile">
                      <img src={logoMobile} alt=" Logo Mobile" />
                    </figure>
                    <figure className="logoDesktop">
                      <img src={logoDesktop} alt=" Logo Desktop" />
                    </figure>
                  </Col>
                </Row>
              </NavbarBrand>
            </Col>
            <Col xs="5">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nl" href="/Planner">
                      Planner
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nl" href="/Partner">
                      Partners
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nl" href="/Pricing">
                      Pricing
                    </NavLink>
                  </NavItem>
                  {sessionStorage.getItem("userData") ? (
                    <NavItem className="signIn">
                      <NavLink href="/Profile">
                        <Button color="primary">Profile</Button>
                      </NavLink>
                    </NavItem>
                  ) : (
                    <NavItem className="signIn">
                      <NavLink href="/Signin">
                        <Button color="primary">Sign in</Button>
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </Col>
          </Container>
        </AppBar>
      </Container>
    );
  }
}
