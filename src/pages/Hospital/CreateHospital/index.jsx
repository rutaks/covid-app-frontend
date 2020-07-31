import React, { useEffect } from 'react';
import { Formik } from 'formik';
import HospitalForm from '../HospitalForm';
import { validationSchema } from './validations';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createHospitalAction from '../../../redux/actions/hospital/createHospital';
import { message } from 'antd';

const CreateHospital = ({ createHospitalAction, createHospitalState: { loading, success, error } }) => {
  useEffect(() => {
    if (success) {
      message.success('Category created succesfully');
    }
  }, [success]);

  useEffect(() => {
    error && message.error(error || 'Could not create category');
  }, [error]);

  return (
    <Formik
      initialValues={{
        names: ''
      }}
      validationSchema={validationSchema}
      onSubmit={({ names }) => {
        createHospitalAction({ names });
      }}
    >
      {({ errors, touched }) => <HospitalForm loading={loading} errors={errors} touched={touched} />}
    </Formik>
  );
};

CreateHospital.propTypes = {
  /** Redux create hospital state */
  createHospitalState: PropTypes.object,
  /** API Action linked with redux to create a hospital */
  createHospitalAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  createHospitalState: state.hospital.createHospital
});

export default connect(mapStateToProps, { createHospitalAction })(CreateHospital);
