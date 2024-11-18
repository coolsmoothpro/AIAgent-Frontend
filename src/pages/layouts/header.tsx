import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Dropdown, Menu } from "antd";
import { MenuOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { removeToken } from "@/store/slices/AuthSlice";

interface HeaderProps {
  onToggle: () => void;  // Function passed from parent to toggle sidebar
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { fullname } = useSelector((state:any) => state.auth) || localStorage.getItem("fullname");

    const userMenu = (
        <Menu>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => logout()}>
            Logout
          </Menu.Item>
        </Menu>
    );

    const logout = () => {
        dispatch(removeToken());
        navigate("/");
    }

    return (
        <div
            style={{
                backgroundColor: "#fff",
                borderBottom: "3px solid #eee",
                width: "100%",
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Button
                type="primary"
                icon={<MenuOutlined />}
                onClick={onToggle}
                style={{
                display: "inline-block",
                zIndex: "1000",
                backgroundColor: "#4CAF50", // Customize button color if needed
                }}
            >
            </Button>

            <Dropdown overlay={userMenu} trigger={['click']}>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <UserOutlined style={{ marginRight: "8px" }} />
                    <Typography.Text strong>{ fullname }</Typography.Text>
                </div>
            </Dropdown>
        </div>
  );
};

export default Header;
