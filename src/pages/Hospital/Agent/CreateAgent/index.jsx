import React from 'react';
import { Formik } from 'formik';
import AgentForm from '../AgentForm';
import { validationSchema } from '../validations';

const CreateAgent = () => {
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
      {({ errors, touched }) => <AgentForm errors={errors} touched={touched} />}
    </Formik>
  );
};

export default CreateAgent;
