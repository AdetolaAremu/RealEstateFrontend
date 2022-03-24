import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink as RRNavLink } from 'react-router-dom';
import ROUTE from "../../Helpers/routes.json"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { logoutUser } from '../../Pages/AuthPages/actions/action';
import '../../components/css/style.css';
class UserNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const handleLogout = (e) => {
      e.preventDefault();
      this.props.logoutUser();
    }

    return (
      <div>
        <Navbar className='shadow giveTopPadding' color="light" fixed='top' light expand="lg">
          <NavbarBrand className='navLogo' href="/">
            <span className='navLogoFirst'>Deal</span><span className='navLogoSecond'>Estate</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" 
                  to={ROUTE.DASHBOARD_HOME}
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" 
                  to={ROUTE.VIEW_PROFILE}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink id="nav-linkk" activeClassName="active"
                  tag={RRNavLink} to={ROUTE.ALL_PROPERTIES}
                >Properties</NavLink>
              </NavItem>
              <NavItem>
                <Button type="submit" onClick={handleLogout} className='bg-danger py-2 px-2 rounded text-white'>
                  Logout
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (userData) => dispatch(logoutUser(userData)),
  };
};

export default connect(null,mapDispatchToProps)(UserNav);