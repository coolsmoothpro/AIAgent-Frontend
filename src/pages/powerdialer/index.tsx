import React from "react";
import { Flex, Form, Button, Card } from "antd";
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";
import { apis } from "@/apis";

const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
    // if (valid(true)) return Promise.resolve(); // strict validation
    if (valid()) return Promise.resolve(); // non-strict validation
    return Promise.reject("Invalid phone number");
};

const PowerDialer: React.FC = () => {
    const [form] = Form.useForm();

    const handleCall = async() => {
        
        const res:any = await apis.startDailer();

        console.log('res', res)
    }

    const handleAddPhone = async() => {
        const formData = await form.validateFields();
        
        const res:any = await apis.addPhone(formData);

        console.log(res)
    }

    return (
        <>
            <Card size="small">
                <h2>Power Dialer</h2>
            </Card> &nbsp;
            <Card title="Power Dialer" >
                <Form
                    form={form}
                    layout="vertical"
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
                    

                    <Flex wrap gap="small">
                        <Button type="primary" onClick={handleAddPhone}>
                            Add Phone
                        </Button>
                        
                        <Button color="primary" variant="outlined" onClick={handleCall}>
                            Launch A Call
                        </Button>
                    </Flex>
                </Form>
            </Card>
        </>
    )
}

export default PowerDialer;