import React from 'react';
import { Button } from 'antd';
import { Input, Form } from 'formik-antd';
import PropTypes from 'prop-types';

/**
 * Functional component representing the
 * Hospital Form used to create or edit a hospital
 * @since version 1.0
 */
export default function OrganisationForm({
  formType = 'CREATE',
  loading = false,
  errors = {},
  touched = {}
}) {
  return (
    <Form
      wrapperCol={{
        span: 6
      }}
      layout="horizontal"
    >
      <Form.Item
        name="names"
        label="Organisation Name"
        validateStatus={errors.names && touched.names ? 'error' : ''}
        help={errors.names && errors.names}
      >
        <Input name="names" />
      </Form.Item>
      <Button loading={loading} type={'primary'} htmlType="submit">
        {formType === 'CREATE' ? 'Submit' : 'Edit'}
      </Button>
    </Form>
  );
}

OrganisationForm.propTypes = {
  /** Props identifying design of form specifying if form is an edit or create form*/
  formType: PropTypes.string,
  /** Boolean representing if form is submitting */
  loading: PropTypes.bool,
  /** Form array holding all form related errors */
  errors: PropTypes.object,
  /** Form event listener holding all form related touched event  */
  touched: PropTypes.object
};
