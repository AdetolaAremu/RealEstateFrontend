import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import ROUTE from "../../Helpers/routes.json"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../../components/css/style.css'

class Example extends React.Component {
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

    const { allAuths } = this.props;

    return (
      <div>
        <Navbar className='shadow' fixed="top" light expand="md">
          <NavbarBrand className='navLogo' href="/">
            <span className='navLogoFirst'>Deal</span><span className='navLogoSecond'>Estate</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {
            allAuths.isAuthenticated != true ? (
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ms-auto" navbar>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.HOME}
                    >Home</NavLink>
                  </NavItem>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.ALL_PROPERTIES}
                    >Posts</NavLink>
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
            ) : (
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ms-auto" navbar>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.HOME}
                    >Home</NavLink>
                  </NavItem>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.DASHBOARD_HOME}
                    >Dashboard</NavLink>
                  </NavItem>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.ALL_PROPERTIES}
                    >Posts</NavLink>
                  </NavItem>
                  {/* <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.LOGIN}
                    >Login</NavLink>
                  </NavItem>
                  <NavItem class="nav-item">
                    <NavLink className='nav-linkk fw-bold text-black' 
                      tag={Link} to={ROUTE.REGISTER}
                    >Register</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink className='nav-linkk fw-bold text-black' 
                      href="https://github.com/reactstrap/reactstrap"
                    >GitHub</NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            )
          }
          
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ allAuths }) => ({
  allAuths,
});

export default connect(mapStateToProps)(Example);