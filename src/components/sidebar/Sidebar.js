import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from "react-router";
import '../css/style.css'

const Side = props => {
   
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <div className="sidebar-sticky"></div>
          <NavItem>
              <NavLink href="/home">Active</NavLink>
          </NavItem>
          <NavItem>
              <NavLink eventKey="link-1">Link</NavLink>
          </NavItem>
          <NavItem>
              <NavLink eventKey="link-2">Link</NavLink>
          </NavItem>
          <NavItem>
              <Nav.Link eventKey="disabled" disabled>
              Disabled
              </Nav.Link>
          </NavItem>
      </Nav>        
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar