import { Layout, theme } from "antd";
import React, { useState } from "react";
const { Sider } = Layout;

export default function SidebarComponent({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        background: colorBgContainer,
      }}
      className="mainlayout__sidebar"
    >
      {children}
    </Sider>
  );
}
