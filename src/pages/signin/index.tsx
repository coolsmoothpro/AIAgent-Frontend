import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Form, Input, Typography, notification } from "antd";
import { GREEN_COLOR } from "@/constants";
import { setUser, setToken } from "@/store/slices/AuthSlice";
import { apis } from "@/apis";

const { Title } = Typography;

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const SignIn: React.FC = () => {
    const [form] = Form.useForm();
    
    const {email, password} = useSelector((state:any) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        form.setFieldsValue({
        "email": email,
        "password": password,
        })
    }, [])

    const [api, contextHolder] = notification.useNotification();
    const successNotification = (type: NotificationType) => {
        api[type]({
        message: 'Success!',
        description:
            'Logged in successfully!',
        });
    };

    const errorNotification = (type: NotificationType) => {
        api[type]({
        message: 'Error!',
        description:
            'Something Failed!',
        });
    };

    const loginHandle = async () => {
        try {
            const data = await form.validateFields();
            const res:any = await apis.login(data);
            if(res.status) {
                successNotification("success");
                dispatch(setUser(res.payload.data));
                dispatch(setToken(res.payload.token));

                setTimeout(() => {
                    navigate("/aiagent");
                }, 1000);
            }
        } catch (error) {
            errorNotification("error");
            console.error("Signin failed:", error);
        }
    };

    const goToSignUp = () => {
        navigate("/signup");
    }

    return (
        <Flex justify="center" style={{ padding: "170px 0" }}>
            {contextHolder}
            <Flex
                vertical
                justify="space-between"
                align="center"
                gap="25px"
                style={{ width: "450px", margin: "30px 10px 50px" }}
                className="full-mobile"
            >
                <Flex
                vertical
                style={{
                    backgroundColor: "#fefefe",
                    padding: "16px 16px 0 16px",
                    borderRadius: "10px",
                    borderBottom: "3px solid #eee",
                    width: "95%",
                }}
                align="center"
                >
                <Title level={3} style={{ fontWeight: "bold" }}>
                    Login
                </Title>
                <Form
                    name="signup-form"
                    layout={"vertical"}
                    form={form}
                    style={{ width: "100%", marginTop: "32px" }}
                >
                    <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email." },
                        { type: "email", message: "Please input a valid email!" },
                    ]}
                    label={
                        <h5
                        style={{
                            color: "rgb(75 85 99)",
                            fontSize: "13px",
                            margin: "0 0 5px",
                        }}
                        >
                        Email
                        </h5>
                    }
                    >
                    <Input placeholder="" style={{ fontSize: "20px" }} />
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[{ required: true }]}
                    label={
                        <h5
                        style={{
                            color: "rgb(75 85 99)",
                            fontSize: "13px",
                            margin: "0 0 5px",
                        }}
                        >
                        Password
                        </h5>
                    }
                    >
                    <Input.Password placeholder="" style={{ fontSize: "20px" }} />
                    </Form.Item>
                    <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                        width: "100%",
                        backgroundColor: GREEN_COLOR,
                        padding: "20px 0",
                        fontSize: "15px",
                        fontWeight: "500",
                        }}
                        onClick={loginHandle}
                    >
                        Sign In
                    </Button>
                    </Form.Item>
                    <Form.Item
                    style={{
                        textAlign: "center"
                    }}>
                    <a
                        type="primary"
                        style={{
                        width: "100%",
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                        }}
                        onClick={goToSignUp}
                    >
                        Don't you have an account?
                    </a>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
    </Flex>
  );
};

export default SignIn;
