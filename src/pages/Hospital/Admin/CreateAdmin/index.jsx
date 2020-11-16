import React from 'react';
import { Formik } from 'formik';
import AdminForm from '../AdminForm';
import { validationSchema } from '../validations';

const CreateAgent = ({ itemsArr = [] }) => {
  return (
    <Formik
      initialValues={{
        names: '',
        email: '',
        phone: '',
        hospital: ''
      }}
      validationSchema={validationSchema}
      // onSubmit={({ names }) => {
      //   createHospitalAction({ names });
      // }}
    >
      {({ errors, touched }) => <AdminForm errors={errors} touched={touched} itemsArr={itemsArr} />}
    </Formik>
  );
};

export default CreateAgent;
