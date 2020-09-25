import React from 'react';
import { Button, Select } from 'antd';
import { Input, Form } from 'formik-antd';
import PropTypes from 'prop-types';

/**
 * Functional component representing the
 * Agent Form used to create or edit a hospital
 * @since version 1.0
 */
export default function AgentForm({ formType = 'CREATE', loading = false, errors = {}, touched = {} }) {
  const { Option } = Select;
  return (
    <Form
      wrapperCol={{
        span: 6
      }}
      layout="horizontal"
    >
      <Form.Item
        name="names"
        label="Agent Name"
        validateStatus={errors.names && touched.names ? 'error' : ''}
        help={errors.names && errors.names}
      >
        <Input name="names" />
      </Form.Item>
      <Form.Item
        name="hospitalId"
        label="Select Organisation"
        validateStatus={errors.hospital && touched.hospital ? 'error' : ''}
        help={errors.hospital && errors.hospital}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Anglican Chruch Remera</Option>
          <Option value="lucy">Sundowner</Option>
        </Select>
        ,
      </Form.Item>
      <Button loading={loading} type={'primary'} htmlType="submit">
        {formType === 'CREATE' ? 'Submit' : 'Edit'}
      </Button>
    </Form>
  );
}

AgentForm.propTypes = {
  /** Props identifying design of form specifying if form is an edit or create form*/
  formType: PropTypes.string,
  /** Boolean representing if form is submitting */
  loading: PropTypes.bool,
  /** Form array holding all form related errors */
  errors: PropTypes.object,
  /** Form event listener holding all form related touched event  */
  touched: PropTypes.object
};
