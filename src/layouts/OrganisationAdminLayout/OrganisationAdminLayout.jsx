import React, { useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import NotFound from '../../pages/NotFound';
import { connect } from 'react-redux';
import setUserStore from '../../redux/actions/setUserStore';
import OrganisationAdminSidebar from './components/OrganisationAdminSidebar';
import { OrganisationAgent } from '../../pages/OrganisationAdminArea';
import { urls } from '../../routes';

const { Header, Content } = Layout;

const OrganisationAdminLayout = () => {
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
      <OrganisationAdminSidebar collapsed={collapsed} handleSizeChange={handleSizeChange} size={size} />
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
              path={`${urls.organisationAdmin.viewAgents}/:organisationId`}
              component={OrganisationAgent}
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

export default connect(mapStateToProps, { setUserStore })(OrganisationAdminLayout);
