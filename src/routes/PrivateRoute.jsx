import React, { useState } from 'react';
import { Redirect, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function PrivateRoute() {
  const [collapsed, setCollapsed] = useState(false);
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  // useEffect(() => {
  //   if (localStorage.MOU_COVID_USER && localStorage.MOU_COVID_USER !== "") {
  //     setUser(JSON.parse(localStorage.MOU_COVID_USER));
  //   }
  // }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (!localStorage.MOU_COVID_TOKEN) return <Redirect to="/login" />;

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<InsertRowAboveOutlined />}>
            <Link to="/" />
            Home
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
          <Dropdown overlay={menu}>
            {/* <Link className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              {`${user.firstName} ${user.lastName}`} <DownOutlined />
            </Link> */}
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Switch></Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
