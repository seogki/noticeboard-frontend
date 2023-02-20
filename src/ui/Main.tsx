import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import './Main.scss'
const { Header, Sider, Content } = Layout
function Main() {
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="layout-main">
      <Header className="header"></Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '시간표',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main
