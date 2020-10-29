import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import VaccineeForm from '../VaccineeForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { validationSchema } from './validations';
import createVaccineeAction from '../../../../redux/actions/vaccinee/createVaccinee';

const CreateVaccinee = ({ createVaccineeAction, createVaccineeState, hospitalId }) => {
  const resetFormRef = useRef();

  useEffect(() => {
    if (createVaccineeState.success) {
      //reset form after successful form submission
      message.success('Vaccinee Created Successfully');
      resetFormRef.current();
    }
  }, [createVaccineeState.success]);

  useEffect(() => {
    if (createVaccineeState.error) {
      message.error(createVaccineeState.error);
    }
  }, [createVaccineeState.error]);

  return (
    <Formik
      initialValues={{
        names: '',
        email: '',
        phone: '',
        dob: new Date()
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetFormRef.current = resetForm;
        values.hospitalId = hospitalId;
        createVaccineeAction(values);
      }}
    >
      {({ errors, touched, values }) => (
        <VaccineeForm
          loading={createVaccineeState.loading}
          values={values}
          errors={errors}
          touched={touched}
        />
      )}
    </Formik>
  );
};

CreateVaccinee.propTypes = {
  /** Props identifying design of form specifying if form is an edit or create form*/
  formType: PropTypes.string,
  /** Boolean representing if form is submitting */
  loading: PropTypes.bool,
  /** Form array holding all form related errors */
  errors: PropTypes.object,
  /** Form event listener holding all form related touched event  */
  touched: PropTypes.object,
  /** Array holding response of all Agents from AgentTable */
  itemsArr: PropTypes.array,
  /** Function to get  all organizations*/
  getOrganisationsAction: PropTypes.func,
  /** Function to create  all organisation agent*/
  createVaccineeAction: PropTypes.func,
  /** Object holding  all organizations*/
  organisationPayload: PropTypes.object,
  /** Object holding  all create agent redux state*/
  createVaccineeState: PropTypes.object,
  hospitalId: PropTypes.number
};

const mapStateToProps = (state) => ({
  createVaccineeState: state.vaccinee.createVaccinee
});

export default connect(mapStateToProps, { createVaccineeAction })(CreateVaccinee);
