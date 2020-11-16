import React from 'react';
import { Button, Select } from 'antd';
import { Input, Form } from 'formik-antd';
import PropTypes from 'prop-types';

/**
 * Functional component representing the
 * Admin Form used to create or edit a hospital
 * @since version 1.0
 */
export default function AdminForm({
  formType = 'CREATE',
  loading = false,
  errors = {},
  touched = {},
  itemsArr = []
}) {
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
        label="Admin Names"
        validateStatus={errors.names && touched.names ? 'error' : ''}
        help={errors.names && errors.names}
      >
        <Input name="names" placeholder="Admin's hospital name" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        validateStatus={errors.email && touched.email ? 'error' : ''}
        help={errors.email && errors.email}
      >
        <Input name="email" placeholder="example@domain.com" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        validateStatus={errors.phone && touched.phone ? 'error' : ''}
        help={errors.phone && errors.phone}
      >
        <Input type="phone" name="phone" placeholder="+2507xxxxxxx" />
      </Form.Item>
      <Form.Item
        name="hospital"
        label="Select Hospital"
        validateStatus={errors.hospital && touched.hospital ? 'error' : ''}
        help={errors.hospital && errors.hospital}
      >
        <Select
          name="hospital"
          showSearch
          placeholder="Select a hospital"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {itemsArr.map((item, index) => (
            <Option key={index} value={item.hospital.id}>
              {item.hospital.names}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Button loading={loading} type={'primary'} htmlType="submit">
        {formType === 'CREATE' ? 'Submit' : 'Edit'}
      </Button>
    </Form>
  );
}

AdminForm.propTypes = {
  /** Props identifying design of form specifying if form is an edit or create form*/
  formType: PropTypes.string,
  /** Boolean representing if form is submitting */
  loading: PropTypes.bool,
  /** Form array holding all form related errors */
  errors: PropTypes.object,
  /** Form event listener holding all form related touched event  */
  touched: PropTypes.object,
  /** Array holding response of all Admins from AdminTable */
  itemsArr: PropTypes.array
};
