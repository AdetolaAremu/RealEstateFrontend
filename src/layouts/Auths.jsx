import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthNavbar from '../components/Navbars/authNavbar';
import ROUTE from "../Helpers/routes.json";
import Login from '../Pages/AuthPages/Login';
import Register from '../Pages/AuthPages/Register';
import LoginSuccess from '../Pages/AuthPages/LoginSuccess';
import ROUTES from '../Helpers/routes.json';
import { Row } from 'reactstrap';

const Auths = () => {

  const { isAuthenticated } = useSelector(state => state.allAuths)

  if(isAuthenticated) return <Redirect to={ROUTES.DASHBOARD_HOME} />

  return (
    <div className='' 
      style={{ overflow:"hidden", backgroundImage:
        "url(" + require("../components/Images/2314950.webp").default + ")",
      backgroundSize: "cover", }}
    >
      <AuthNavbar />
        <Row>
          <Switch>
            <Route path={ROUTE.LOGIN} component={Login} />
            <Route path={ROUTE.REGISTER} component={Register} />
            <Route path={ROUTE.LOGIN_SUCCESS} component={LoginSuccess} />
          </Switch>
        </Row>
    </div>
  )
}

export default Auths