import React from 'react';
import { Formik } from 'formik';
import AgentForm from '../AgentForm';
import { validationSchema } from '../validations';

const CreateAgent = ({ itemsArr = [] }) => {
  return (
    <Formik
      initialValues={{
        names: '',
        hospital: ''
      }}
      validationSchema={validationSchema}
      // onSubmit={({ names }) => {
      //   createHospitalAction({ names });
      // }}
    >
      {({ errors, touched }) => <AgentForm errors={errors} touched={touched} itemsArr={itemsArr} />}
    </Formik>
  );
};

export default CreateAgent;
