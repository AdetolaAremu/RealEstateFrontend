import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
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
        <Navbar className='shadow giveTopPadding' fixed="top" light expand="md">
          <NavbarBrand className='navLogo' href="/">
            <span className='navLogoFirst'>Deal</span><span className='navLogoSecond'>Estate</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem className="nav-item">
                <NavLink to={ROUTE.HOME} tag={RRNavLink} exact id='nav-linkk'
                >Home</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink id="nav-linkk" activeClassName="active"
                  tag={RRNavLink} to={ROUTE.ALL_PROPERTIES}
                >Properties</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" to={ROUTE.LOGIN}
                >Login</NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink id='nav-linkk' tag={RRNavLink} activeClassName="active" to={ROUTE.REGISTER}
                >Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id='nav-linkk' target="_blank"
                  href="https://github.com/AdetolaAremu/RealEstateFrontend"
                >GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}