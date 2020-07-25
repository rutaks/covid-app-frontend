import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Logout from "../pages/Logout";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route path="/" component={PrivateRoute} />
    </Switch>
  );
}
