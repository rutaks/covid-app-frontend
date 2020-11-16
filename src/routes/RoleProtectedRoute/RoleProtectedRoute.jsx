import React from 'react';

import ProtectedRoute from './ProtectedRoute';
import { useAuth } from '../../auth';

const RoleProtectedRoute = ({ role, ...rest }) => {
  const { user, hasRole } = useAuth();

  const guard = () => user && hasRole(user, role);

  return <ProtectedRoute guard={guard} {...rest} redirectOnDeny="/login" />;
};

export default RoleProtectedRoute;
