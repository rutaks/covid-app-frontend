import React, { useState } from 'react';
import { Redirect, Switch, Link, Route } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InsertRowAboveOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import NotFound from '../pages/NotFound';
import Hospital from '../pages/Hospital';
import Organisation from '../pages/Organisation';
import Agent from '../pages/Hospital/Agent';
import AgentOrg from '../pages/Organisation/Agent';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

export default function PrivateRoute() {
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large');
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  // useEffect(() => {
  //   if (localStorage.MOU_COVID_USER && localStorage.MOU_COVID_USER !== "") {
  //     setUser(JSON.parse(localStorage.MOU_COVID_USER));
  //   }
  // }, []);

  const handleSizeChange = (e) => {
    setSize({ size: e.target.value });
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (!localStorage.MOU_COVID_TOKEN) return <Redirect to="/login" />;

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key="sub1" icon={<InsertRowAboveOutlined />} title="Hospital">
            <Menu.Item key="1">
              <Link to="/hospitals" />
              Hospitals
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/hospitals/agents">Admins</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<InsertRowAboveOutlined />} title="Organisations">
            <Menu.Item key="3">
              <Link to="/organisations" />
              Organisations
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/organisations/agents">Agents</Link>
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
            <Route exact path="/hospitals/agents" component={Agent} />
            <Route exact path="/hospitals" component={Hospital} />
            <Route exact path="/organisations" component={Organisation} />
            <Route exact path="/organisations/agents" component={AgentOrg} />
            <Route exact component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
