import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, NavLink as RRNavLink } from 'react-router-dom';
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
        <Navbar color="light" fixed='top' light expand="lg" className='p-3'>
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
              <NavItem>
                {/* <Form role='submit' onSubmit={handleLogout}> */}
                  <Button type="submit" onClick={handleLogout} className='bg-danger py-2 px-2 rounded text-white'>
                    Logout
                  </Button>
                {/* </Form> */}
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Name
                </DropdownToggle>
                <DropdownMenu right="5">
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (userData) => dispatch(logoutUser(userData)),
  };
};

export default connect(null,mapDispatchToProps)(UserNav);