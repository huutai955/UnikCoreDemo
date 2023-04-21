import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Layout, theme } from "antd";
import MenuComponent from "../menu/menu.jsx";
import SidebarComponent from "../sidebar/sidebar.jsx";
import HeaderComponent from "../header/header.jsx";
const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout className="mainlayout">
      <HeaderComponent />
      <Layout>
        <SidebarComponent>
          <Scrollbars
            style={{ width: "100%" }}
            renderTrackHorizontal={(props) => (
              <div {...props} className="track-horizontal" />
            )}
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
          >
            <MenuComponent />
          </Scrollbars>
        </SidebarComponent>
        <Layout>{children}</Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
