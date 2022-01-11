import React from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import ROUTE from '../../Helpers/routes.json';
import '../css/style.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../../components/css/style.css'
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
        <Navbar className='shadow' fixed="top" light expand="md">
          <NavbarBrand className='navLogo' href="/">
            <span className='navLogoFirst'>Deal</span><span className='navLogoSecond'>Estate</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem class="nav-item">
                <NavLink to={ROUTE.HOME} id='nav-linkk' tag={RRNavLink}
                >Home</NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" to={ROUTE.LOGIN}
                >Login</NavLink>
              </NavItem>
              <NavItem class="nav-item">
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" to={ROUTE.REGISTER}
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