import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { validationSchema } from './validations';
import PropTypes from 'prop-types';
import Title from 'antd/lib/typography/Title';
import { Input, Form } from 'formik-antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Row, Col, message } from 'antd';
import './index.css';
import loginAction from '../../redux/actions/login';

/**
 * Functional component representing the
 * Login Form used to access the platform
 * @since version 1.0
 */
const Login = ({ loginState, loginAction }) => {
  const history = useHistory();
  useEffect(() => {
    loginState.success && history.push('/hospitals');
  }, [loginState.success, history]);

  useEffect(() => {
    loginState.error && message.error(loginState.error);
  }, [loginState.error]);
  return (
    <Row>
      {localStorage.MOU_COVID_TOKEN && history.push('/')}
      <Col span={8} offset={8}>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={({ username, password }) => {
            loginAction({ username, password });
          }}
        >
          {({ errors, touched }) => (
            <Form className="login-form">
              <Title className="login-title">
                <img
                  src={window.location.origin + '/img/logo.png'}
                  style={{ height: '100px', width: '100px' }}
                  alt="Covid App Logo"
                />
                Covid App
              </Title>
              <Form.Item
                name="username"
                validateStatus={errors.username && touched.username ? 'error' : ''}
                help={touched.username && errors.username && errors.username}
              >
                <Input
                  name="username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                validateStatus={errors.password && touched.password ? 'error' : ''}
                help={touched.password && errors.password && errors.password}
              >
                <Input.Password
                  name="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Link className="login-form-forgot" to="/">
                Forgot password
              </Link>
              <Button
                loading={loginState.loading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  /** Redux login state object  */
  loginState: PropTypes.object,
  /** login function  */
  loginAction: PropTypes.func
};

const mapStateToProps = (state) => ({
  loginState: state.user.login
});

export default connect(mapStateToProps, { loginAction })(Login);
