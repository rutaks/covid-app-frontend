import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import HospitalAgentForm from '../HospitalAgentForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { validationSchema } from '../validations';
import createOrganisationAgentAction from '../../../../redux/actions/organisation/createAgent';

const CreateHospitalAgent = ({
  organisationId,
  createOrganisationAgentAction,
  createOrganisationAgentState
}) => {
  const resetFormRef = useRef();

  useEffect(() => {
    if (createOrganisationAgentState.success) {
      //reset form after successful form submission
      message.success('Agent Created Successfully');
      resetFormRef.current();
    }
  }, [createOrganisationAgentState.success]);

  useEffect(() => {
    if (createOrganisationAgentState.error) {
      message.error(createOrganisationAgentState.error);
    }
  }, [createOrganisationAgentState.error]);

  return (
    <Formik
      initialValues={{
        names: '',
        email: '',
        phone: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetFormRef.current = resetForm;
        values.organisationId = organisationId;
        createOrganisationAgentAction(values);
      }}
    >
      {({ errors, touched, values }) => (
        <HospitalAgentForm
          loading={createOrganisationAgentState.loading}
          values={values}
          errors={errors}
          touched={touched}
        />
      )}
    </Formik>
  );
};

CreateHospitalAgent.propTypes = {
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
  createOrganisationAgentAction: PropTypes.func,
  /** Object holding  all organizations*/
  organisationPayload: PropTypes.object,
  /** Object holding  all create agent redux state*/
  createOrganisationAgentState: PropTypes.object,
  organisationId: PropTypes.number
};

const mapStateToProps = (state) => ({
  createOrganisationAgentState: state.organisation.createOrganisationAgent
});

export default connect(mapStateToProps, { createOrganisationAgentAction })(CreateHospitalAgent);
