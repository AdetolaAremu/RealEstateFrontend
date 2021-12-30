import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE from "../../Helpers/routes.json"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';

export default class UserNav extends React.Component {
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
                <NavLink className='nav-linkk fw-bold text-black' tag={Link} 
                  to={ROUTE.DASHBOARD_HOME}
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-linkk fw-bold text-black' tag={Link} 
                  to={ROUTE.VIEW_PROFILE}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='bg-danger py-2 px-2 rounded text-white'>Logout</NavLink>
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