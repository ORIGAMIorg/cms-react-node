import React, { useState } from 'react';

import { Row, Col, Layout, Input, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export default function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedRight, setCollapsedRight] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const toggleCollapsed = () => {
    setCollapsedRight(!collapsedRight);
  };
  const onSearch = (value) => console.log(value);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          <Row align="middle">
            <Col span={8}>
              <Input.Group compact>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  onSearch={onSearch}
                />
              </Input.Group>
            </Col>
            <Col span={16}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Menu.Item key="4">nav 4</Menu.Item>
                <Menu.Item key="5">nav 5</Menu.Item>
                <Menu.Item key="6">nav 6</Menu.Item>
                <Menu.Item key="7">nav 7</Menu.Item>
                <Menu.Item key="8">nav 8</Menu.Item>
                <Menu.Item key="9">nav 9</Menu.Item>
                <Menu.Item key="10">nav 10</Menu.Item>
                <Menu.Item key="11">nav 11</Menu.Item>
                <Menu.Item key="12">nav 12</Menu.Item>
                <Menu.Item key="13">nav 13</Menu.Item>
                <Menu.Item key="14">nav 14</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <Sider
        collapsedWidth="0"
        collapsible
        collapsed={collapsedRight}
        onCollapse={toggleCollapsed}
        reverseArrow
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}
