import React, { useState } from "react";
import { Avatar, Form, Space, Button, Flex, Card, Typography, Menu, Dropdown, Modal } from "antd";
import { UserOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";


const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
    // if (valid(true)) return Promise.resolve(); // strict validation
    if (valid()) return Promise.resolve(); // non-strict validation
    return Promise.reject("Invalid phone number");
};

const Agents: React.FC = () => {
    const { Text } = Typography;

    const menu = (
        <Menu>
            <Menu.Item key="edit">
            Edit
            </Menu.Item>
            <Menu.Item key="delete">
            Delete
            </Menu.Item>
        </Menu>
    );

    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setOpen(false);
    };

    return (
        <>
            <Card size="small">
                <h2>Agents</h2>
            </Card> &nbsp;
            <Card>
                <Card style={{ backgroundColor: "#F8FAFC", display: 'inline-block', width: '33%', margin: 2 }}>
                    <Flex vertical >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Space wrap size={16}>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Flex vertical>
                                    <h3>Alex</h3>
                                    <p>Alex</p>
                                </Flex>
                            </Space> 

                            {/* Three-dot Dropdown */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                            </Dropdown>
                        </div> &nbsp;
                        <Space wrap size={16}>
                            <Text type="warning">Outbound</Text>
                            <p>11/11/2024</p>
                        </Space>
                        <h5 style={{ marginTop: 10, marginBottom: 20 }}>Agent ID (4073b66330174f5a8f1f662f732d0fdb)</h5>
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>
                            Make A Call
                        </Button>
                    </Flex>
                </Card>
                <Card style={{ backgroundColor: "#F8FAFC", display: 'inline-block', width: '33%', margin: 2 }}>
                    <Flex vertical >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Space wrap size={16}>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Flex vertical>
                                    <h3>Alex</h3>
                                    <p>Alex</p>
                                </Flex>
                            </Space> 

                            {/* Three-dot Dropdown */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                            </Dropdown>
                        </div> &nbsp;
                        <Space wrap size={16}>
                            <Text type="warning">Outbound</Text>
                            <p>11/11/2024</p>
                        </Space>
                        <h5 style={{ marginTop: 10, marginBottom: 20 }}>Agent ID (4073b66330174f5a8f1f662f732d0fdb)</h5>
                        <Button color="primary" variant="outlined">
                            Make A Call
                        </Button>
                    </Flex>
                </Card>
                <Card style={{ backgroundColor: "#F8FAFC", display: 'inline-block', width: '33%', margin: 2 }}>
                    <Flex vertical >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Space wrap size={16}>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Flex vertical>
                                    <h3>Alex</h3>
                                    <p>Alex</p>
                                </Flex>
                            </Space> 

                            {/* Three-dot Dropdown */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                            </Dropdown>
                        </div> &nbsp;
                        <Space wrap size={16}>
                            <Text type="warning">Outbound</Text>
                            <p>11/11/2024</p>
                        </Space>
                        <h5 style={{ marginTop: 10, marginBottom: 20 }}>Agent ID (4073b66330174f5a8f1f662f732d0fdb)</h5>
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>
                            Make A Call
                        </Button>
                    </Flex>
                </Card>
                <Card style={{ backgroundColor: "#F8FAFC", display: 'inline-block', width: '33%', margin: 2 }}>
                    <Flex vertical >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Space wrap size={16}>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <Flex vertical>
                                    <h3>Alex</h3>
                                    <p>Alex</p>
                                </Flex>
                            </Space> 

                            {/* Three-dot Dropdown */}
                            <Dropdown overlay={menu} trigger={['click']}>
                                <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                            </Dropdown>
                        </div> &nbsp;
                        <Space wrap size={16}>
                            <Text type="warning">Outbound</Text>
                            <p>11/11/2024</p>
                        </Space>
                        <h5 style={{ marginTop: 10, marginBottom: 20 }}>Agent ID (4073b66330174f5a8f1f662f732d0fdb)</h5>
                        <Button color="primary" variant="outlined">
                            Make A Call
                        </Button>
                    </Flex>
                </Card>                
            </Card>
            <Modal
                title="Make A Call"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={700}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Launch Call
                    </Button>,
                ]}
            >
                <Form.Item
                    name="phone"
                    rules={[
                        { required: true, message: "Please input your phone number." },
                        { validator },
                    ]}
                    label="From Phone Number"
                    >
                    <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[
                        { required: true, message: "Please input your phone number." },
                        { validator },
                    ]}
                    label={
                        <h5
                            style={{
                                color: "rgb(75 85 99)",
                                fontSize: "13px",
                                margin: "10px 0 5px",
                            }}
                            >
                            To  Phone  Number
                        </h5>
                    }
                    >
                    <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />
                </Form.Item>
            </Modal>
        </>
    )
}

export default Agents;