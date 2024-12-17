import React from "react";
import AppHeader from "./header";
import AppContent from "./content";
import { Layout } from "antd";

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 68,
  padding: "16px 24px",
  backgroundColor: "#f5f5f5",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "4vw",
  backgroundColor: "#f5f5f5",
};

const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  margin: "0px 12px 64px",
  backgroundColor: "#f5f5f5",
};
const Home = () => {
  
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <AppHeader />
      </Header>
      <Content style={contentStyle}>
        <AppContent />
      </Content>
    </Layout>
  );
};

export default Home;
