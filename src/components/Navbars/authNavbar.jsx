import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE from '../../Helpers/routes.json';
import '../css/style.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem 
} from 'reactstrap';

export default class AuthNavbar extends React.Component {
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
        <Navbar fixed="top" light expand="md">
          <NavbarBrand className='navLogo' href="/">
            <span className='navLogoFirst'>Deal</span><span className='navLogoSecond'>Estate</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem class="nav-item">
                <NavLink className='nav-linkk fw-bold text-black' 
                  tag={Link} to={ROUTE.HOME}
                >Home</NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink className='nav-linkk fw-bold text-black' 
                  tag={Link} to={ROUTE.LOGIN}
                >Login</NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink className='nav-linkk fw-bold text-black' 
                  tag={Link} to={ROUTE.REGISTER}
                >Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-linkk fw-bold text-black' 
                  href="https://github.com/reactstrap/reactstrap"
                >GitHub</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}