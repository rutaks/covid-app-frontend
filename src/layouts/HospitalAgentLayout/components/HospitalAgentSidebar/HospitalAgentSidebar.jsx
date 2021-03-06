import React from 'react';
import { Menu, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { InsertRowAboveOutlined, LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { urls } from '../../../../routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

const HospitalAgentSidebar = ({ collapsed, size, handleSizeChange }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <SubMenu key="sub1" icon={<InsertRowAboveOutlined />} title="Vaccinees">
          <Menu.Item key="1">
            <Link to={`${urls.hospitalAgent.viewVaccinees}`} />
            View Vaccinees
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Link to="/logout">
        <Button
          style={{ position: 'absolute', right: 0, bottom: 0, width: '100%' }}
          type="primary"
          onChange={handleSizeChange}
          icon={<LogoutOutlined />}
          size={size}
        >
          Logout
        </Button>
      </Link>
    </Sider>
  );
};

HospitalAgentSidebar.propTypes = {
  /** TODO:  */
  collapsed: PropTypes.bool,
  handleSizeChange: PropTypes.func,
  size: PropTypes.number
};

export default HospitalAgentSidebar;
