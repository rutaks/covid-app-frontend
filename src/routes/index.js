import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Logout from '../pages/Logout';

const HOSPITAL_ADMIN_BASE_URL = '/hospital-admin';
const HOSPITAL_AGENT_BASE_URL = '/hospital-agent';
const ORGANISATION_ADMIN_BASE_URL = '/organisation-admin';
export const urls = {
  hospitalAdmin: {
    viewAgents: `${HOSPITAL_ADMIN_BASE_URL}/agents`
  },
  hospitalAgent: {
    viewVaccinees: `${HOSPITAL_AGENT_BASE_URL}/vaccinees`
  },
  organisationAdmin: {
    viewAgents: `${ORGANISATION_ADMIN_BASE_URL}/agents`
  }
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route path="/" component={PrivateRoute} />
    </Switch>
  );
}
