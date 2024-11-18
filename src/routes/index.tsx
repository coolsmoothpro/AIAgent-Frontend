import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/home";
import Signup from "../pages/signup";
import SignIn from "@/pages/signin";
import Dashboard from "@/pages/dashboard";
import { Layout } from "antd";
import Sidebar from "@/pages/layouts/sidebar";
import Header from "@/pages/layouts/header";
import { Outlet } from 'react-router-dom';
import Outbound from "@/pages/outbound";
import Agent from "@/pages/agents";
import AIagent from "@/pages/aiagent";
import PowerDialer from "@/pages/powerdialer";

const { Content } = Layout;

const AppRouter: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const { token } = useSelector((state:any) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />

        { token && <Route
          element={
            <Layout style={{ height: "calc(100vh - 80px)", width: "100%" }}>
              <Sidebar  collapsed={collapsed} />
              <Layout>
                <Header onToggle={toggleSidebar} />
                <Content style={{ padding: "24px", minHeight: 280 }}>
                  {/* Nested routes will display here */}
                  <Outlet />
                </Content>
              </Layout>
            </Layout>
          }
        >
          {/* Define each protected route inside this layout */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aiagent" element={<AIagent />} />
          <Route path="/powerdialer" element={<PowerDialer />} />
          <Route path="/outbound" element={<Outbound />} />
          <Route path="/agents" element={<Agent />} />
        </Route>
        }
        
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
