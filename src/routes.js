import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/authentication";

//Pages
import SignUp from "./pages/SignUp";


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <span>Login</span>} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={() => <span>App</span>} />
      <Route path="*" component={() => <span>Page not found</span>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;