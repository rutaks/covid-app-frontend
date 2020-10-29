import React from 'react';
import { Button, DatePicker } from 'antd';
import { Input, Form } from 'formik-antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import getOrganisationsAction from '../../../../redux/actions/organisation/getOrganisations';

/**
 * Functional component representing the
 * Agent Form used to create or edit a hospital
 * @since version 1.0
 */
const VaccineeForm = ({ formType = 'CREATE', loading = false, errors = {}, touched = {}, values }) => {
  return (
    <Form
      wrapperCol={{
        span: 6
      }}
      layout="horizontal"
    >
      <Form.Item
        name="names"
        label="Vaccinee Names"
        validateStatus={errors.names && touched.names ? 'error' : ''}
        help={errors.names && errors.names}
      >
        <Input name="names" placeholder="Vaccinee's name" />
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
      <Form.Item name="dob" label="Date Of Birth">
        <DatePicker
          defaultValue={moment(values.dob)}
          onChange={(date) => {
            values.dob = date;
          }}
          placeholder="Date Of Birth"
        />
      </Form.Item>
      <Button loading={loading} type={'primary'} htmlType="submit">
        {formType === 'CREATE' ? 'Submit' : 'Edit'}
      </Button>
    </Form>
  );
};

VaccineeForm.propTypes = {
  getOrganisationsState: PropTypes.object
};

const mapStateToProps = (state) => ({
  getOrganisationsState: state.organisation.getOrganisations,
  organisationPayload: state.organisation.organisationPayload
});

export default connect(mapStateToProps, { getOrganisationsAction })(VaccineeForm);

VaccineeForm.propTypes = {
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
  /** Object holding  all organizations*/
  organisationPayload: PropTypes.object,
  values: PropTypes.object
};
