import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthNavbar from '../components/Navbars/authNavbar';
import ROUTE from "../Helpers/routes.json";
import Login from '../Pages/AuthPages/Login';
import Register from '../Pages/AuthPages/Register'
import { Container, Row } from 'reactstrap';

const Auths = () => {
  return (
    <div className=''>
      <AuthNavbar />
      <Container>
        <Row>
          <Switch>
            <Route path={ROUTE.LOGIN} component={Login} />
            <Route path={ROUTE.REGISTER} component={Register} />
          </Switch>
        </Row>
      </Container>
    </div>
  )
}

export default Auths