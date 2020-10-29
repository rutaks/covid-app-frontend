import React, { useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import NotFound from '../../pages/NotFound';
import { HospitalAgent } from '../../pages/HospitalAdminArea';
import { connect } from 'react-redux';
import setUserStore from '../../redux/actions/setUserStore';
import HospitalAdminSidebar from './components';
import { urls } from '../../routes';

const { Header, Content } = Layout;

const HospitalAdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large');
  const handleSizeChange = (e) => {
    setSize({ size: e.target.value });
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (!localStorage.MOU_COVID_TOKEN) return <Redirect to="/login" />;

  return (
    <Layout style={{ height: '100vh' }}>
      <HospitalAdminSidebar collapsed={collapsed} size={size} handleSizeChange={handleSizeChange} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Switch>
            <Route
              exact
              path={`${urls.hospitalAdmin.viewAgents}/:organizationId`}
              component={HospitalAgent}
            />
            <Route exact component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  userState: state.user.user
});

export default connect(mapStateToProps, { setUserStore })(HospitalAdminLayout);
