import React, { useState } from "react";
import { Flex, Form, Input, Button, Select, Card, Space, Avatar, Modal } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";
import { apis } from "@/apis";

const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
    // if (valid(true)) return Promise.resolve(); // strict validation
    if (valid()) return Promise.resolve(); // non-strict validation
    return Promise.reject("Invalid phone number");
};

const Outbound: React.FC = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
    const agents = ["Alex", "Joseph", "Acher", "Kayla"];

    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setOpen(false);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };

    const handleCall = async() => {
        const res:any = await apis.outbound();

        console.log(res)
    }

    const handlePrompt = async() => {
        const data = { "prompt": "What is the AI?" }
        const res:any = await apis.generateText(data);

        console.log(res)
    }

    return (
        <>
            <Card size="small">
                <h2>Outbound Agent</h2>
            </Card> &nbsp;
            <Card title="Create Outbound Agent" >
                <Button onClick={handleCall}>Call</Button>
                <Button onClick={handlePrompt}>Prompt</Button>
                <Form
                    form={form}
                    layout="vertical"
                    >
                    <Form.Item label="From Phone Number" tooltip="This is a required field" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input placeholder="Active usage numbers" />
                    </Form.Item>

                    <Form.Item
                        label="Initial Message"
                        tooltip={{ title: 'ResponseDTO', icon: <InfoCircleOutlined /> }}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}
                    >
                        <Input placeholder="Initial Message" />
                    </Form.Item>

                    <Form.Item label="Voice Agent">
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            {agents.map((agent) => (
                                <Space
                                    key={agent}
                                    wrap
                                    size={16}
                                    direction="vertical"
                                    align="center"
                                    onClick={() => setSelectedAgent(agent)}
                                    style={{
                                    cursor: "pointer",
                                    padding: "8px",
                                    borderRadius: "8px",
                                    border: selectedAgent === agent ? "2px solid #1890ff" : "2px solid transparent",
                                    transition: "border 0.2s ease",
                                    }}
                                >
                                    <Avatar size={64} icon={<UserOutlined />} />
                                    <p>{agent}</p>
                                </Space>
                            ))}
                        </div>
                    </Form.Item>

                    <Form.Item label="Pre-made Prompts">
                        <Select>
                            <Select.Option value="demo">Select Transcript</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Prompt">
                        <TextArea rows={8} />
                    </Form.Item>

                    <Flex wrap gap="small">
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>
                            Launch A Call
                        </Button>
                        <Button type="primary">Save Agent</Button>
                    </Flex>
                </Form>
            </Card>
            <Modal
                title="To Phone Number"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={700}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Discard
                    </Button>,
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
                    label={
                        <h5
                            style={{
                                color: "rgb(75 85 99)",
                                fontSize: "13px",
                                margin: "10px 0 5px",
                            }}
                            >
                            Phone Number
                        </h5>
                    }
                    >
                    <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />
                </Form.Item>
            </Modal>
        </>
    )
}

export default Outbound;