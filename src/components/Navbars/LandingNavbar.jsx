import React from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import { connect } from "react-redux";
import ROUTE from "../../Helpers/routes.json"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
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
        <Navbar className='shadow giveTopPadding' fixed="top" light expand="md">
          <Link to={ROUTE.HOME} className='navLogo' style={{ textDecoration:"none" }}>
            <span className='navLogoFirst' style={{ color:"black" }}>Deal</span><span className='navLogoSecond'>Estate</span>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          {
            allAuths.isAuthenticated !== true ? (
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ms-auto" navbar>
                  <NavItem className="nav-item">
                    <NavLink id='nav-linkk'
                      to={ROUTE.HOME} tag={RRNavLink} exact activeClassName="active"
                    >Home</NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink id="nav-linkk" 
                     to={ROUTE.ALL_PROPERTIES} tag={RRNavLink} exact activeClassName="active"
                    >Properties</NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink id='nav-linkk' 
                      tag={Link} to={ROUTE.LOGIN}
                    >Login</NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink id='nav-linkk' 
                      tag={Link} to={ROUTE.REGISTER}
                    >Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id='nav-linkk' target="_blank"
                      href="https://github.com/AdetolaAremu/RealEstateFrontend"
                    >GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            ) : (
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ms-auto" navbar>
                  <NavItem className="nav-item">
                    <NavLink id="nav-linkk" 
                      to="/" tag={RRNavLink} exact activeClassName="active"
                    >Home</NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink id="nav-linkk" className='' 
                      tag={Link} to={ROUTE.DASHBOARD_HOME}
                    >Dashboard</NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <NavLink id="nav-linkk" activeClassName="active"
                      tag={RRNavLink} to={ROUTE.ALL_PROPERTIES}
                    >Properties</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink id="nav-linkk" className='' 
                      href="https://github.com/AdetolaAremu/RealEstateFrontend"
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