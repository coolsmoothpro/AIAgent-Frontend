import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { ShrinkOutlined, ArrowsAltOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { GREEN_COLOR } from "@/constants";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;  // Track whether sidebar is collapsed or not
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
    const navigate = useNavigate();

    const goToPage = (page: any) => {
        navigate(page);
    }

    return (
        <Sider width={250} style={{ background: "#fff" }}  collapsed={collapsed}>
            <div className="logo" style={{ padding: "16px", textAlign: "center", color: GREEN_COLOR }}>
                {/* Optional logo or title */}
                <Typography.Title level={4} style={{ color: GREEN_COLOR, marginTop: "8px" }}>
                    Agent
                </Typography.Title>
            </div>
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: "100%" }}>
                {/* <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => goToPage("/dashboard")}>
                    Dashboard
                </Menu.Item> */}
                <Menu.Item key="2" icon={<ShrinkOutlined />} onClick={() => goToPage("/aiagent")}>
                    AI Agent
                </Menu.Item>
                <Menu.Item key="5" icon={<PhoneOutlined />} onClick={() => goToPage("/powerdialer")}>
                    Power Dialer
                </Menu.Item>
                <Menu.Item key="3" icon={<ArrowsAltOutlined />} onClick={() => goToPage("/outbound")}>
                    Outbound Agent
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />} onClick={() => goToPage("/agents")}>
                    Agents
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;