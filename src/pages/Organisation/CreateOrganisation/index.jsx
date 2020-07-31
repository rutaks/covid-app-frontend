import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validations';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createOrganisationAction from '../../../redux/actions/organisation/createOrganisation';
import { message } from 'antd';
import OrganisationForm from '../OrganisationForm';

const CreateOrganisation = ({
  createOrganisationAction,
  createOrganisationState: { loading, success, error }
}) => {
  useEffect(() => {
    if (success) {
      message.success('Organisation created succesfully');
    }
  }, [success]);

  useEffect(() => {
    error && message.error(error || 'Could not create organisation');
  }, [error]);

  return (
    <Formik
      initialValues={{
        names: ''
      }}
      validationSchema={validationSchema}
      onSubmit={({ names }) => {
        createOrganisationAction({ names });
      }}
    >
      {({ errors, touched }) => <OrganisationForm loading={loading} errors={errors} touched={touched} />}
    </Formik>
  );
};

CreateOrganisation.propTypes = {
  /** Redux create organisation state */
  createOrganisationState: PropTypes.object,
  /** API Action linked with redux to create a organisation */
  createOrganisationAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  createOrganisationState: state.organisation.createOrganisation
});

export default connect(mapStateToProps, { createOrganisationAction })(CreateOrganisation);
