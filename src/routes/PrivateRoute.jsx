import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setUserStore from '../redux/actions/setUserStore';
import { isSuperAdmin, isHospitalAdmin, isOrganisationAdmin } from '../helpers/userHelper';
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import HospitalAdminLayout from '../layouts/HospitalAdminLayout';
import OrganisationAdminLayout from '../layouts/OrganisationAdminLayout/OrganisationAdminLayout';

const PrivateRoute = ({ userState }) => {
  const [userRole, setRole] = useState();
  const [isLoadingRole, setLoadingRole] = useState(true);

  useEffect(() => {
    if (userState.role) {
      setRole(userState.role);
      setLoadingRole(false);
    }
  }, [userState]);

  if (isLoadingRole) return <h1>Loading...</h1>;

  return (
    <Fragment>
      {isSuperAdmin(userRole) && <SuperAdminLayout />}
      {isHospitalAdmin(userRole) && <HospitalAdminLayout />}
      {isOrganisationAdmin(userRole) && <OrganisationAdminLayout />}
    </Fragment>
  );
};

PrivateRoute.propTypes = {
  /** Redux user state object  */
  userState: PropTypes.object
};

const mapStateToProps = (state) => ({
  userState: state.user.user
});

export default connect(mapStateToProps, { setUserStore })(PrivateRoute);
