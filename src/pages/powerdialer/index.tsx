import React, { useState } from "react";
import { Flex, Form, Button, Input , Card, notification } from "antd";
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";
import { apis } from "@/apis";

const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
    // if (valid(true)) return Promise.resolve(); // strict validation
    if (valid()) return Promise.resolve(); // non-strict validation
    return Promise.reject("Invalid phone number");
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PowerDialer: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const errorNotification = (type: NotificationType, message: any) => {
        api[type]({
        message: 'Error!',
        description:
            message,
        });
    };

    const successNotification = (type: NotificationType, message: any) => {
        api[type]({
        message: 'Success!',
        description:
            message,
        });
    };

    const handleCall = async() => {
        setLoading(true);
        const formData = await form.validateFields();

        const res:any = await apis.startDailer(formData);
        if (res.status === "success") {
            setLoading(false);
        } else {
            setLoading(false);
            errorNotification("error", "Dialer Failed");
        }

        console.log('res', res)
    }

    const handleAddPhone = async() => {
        const formData = await form.validateFields();
        
        const res:any = await apis.addPhone(formData);

        if (res.status === "success") {
            successNotification("success", res.message);
        } else {            
            errorNotification("error", res.message);
        }
        console.log(res)
    }

    return (
        <>
            {contextHolder}
            <Card size="small">
                <h2>Power Dialer</h2>
            </Card> &nbsp;
            <Card title="Power Dialer" >
                <Form
                    form={form}
                    layout="vertical"
                    >                    

                    <Form.Item
                        name="prompt"
                        rules={[
                            { required: true, message: "Please input question." },
                        ]}
                        label={
                            <h5
                                style={{
                                    color: "rgb(75 85 99)",
                                    fontSize: "13px",
                                    margin: "10px 0 5px",
                                }}
                                >
                                Question
                            </h5>
                        }
                    >
                        <Input placeholder="Initial Message" />
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
                                Phone Number
                            </h5>
                        }
                    >
                        <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />                        
                    </Form.Item>                    

                    <Flex wrap gap="small">
                        <Button type="primary" onClick={handleAddPhone}>
                            Add Phone
                        </Button>
                        
                        <Button color="primary" variant="outlined" loading={loading} onClick={handleCall}>
                            Launch A Call
                        </Button>
                    </Flex>
                </Form>
            </Card>
        </>
    )
}

export default PowerDialer;