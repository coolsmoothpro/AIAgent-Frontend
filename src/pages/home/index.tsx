import React from "react";
import AppHeader from "./header";
import { Layout } from "antd";
import AppContent from "./content";

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    padding: "16px 128px",
    backgroundColor: "#ffffff",
};

const contentStyle: React.CSSProperties = {
    backgroundImage: `url("images/dot_graphic.png")`,
};

const layoutStyle: React.CSSProperties = {
  overflow: "hidden",
  backgroundColor: "white",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.25)",
};
const Home = () => {

    return (
        <>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <AppHeader />
                </Header>
            </Layout>
            <Content style={contentStyle}>
                <AppContent />
            </Content>
        </>
    );
};

export default Home;
