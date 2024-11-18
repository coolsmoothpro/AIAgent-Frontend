import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Form, Input, Typography, notification } from "antd";
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";
import { GREEN_COLOR } from "@/constants";
import { signup } from "@/store/slices/AppSlice";
import { apis } from "@/apis";
import Header from "./header";


const { Title } = Typography;

const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
  // if (valid(true)) return Promise.resolve(); // strict validation
  if (valid()) return Promise.resolve(); // non-strict validation
  return Promise.reject("Invalid phone number");
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  
  const {fullname, email, password} = useSelector((state:any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    form.setFieldsValue({
      "fullname": fullname,
      "email": email,
      "password": password,
    })
  }, [])

  form.setFieldValue("name", fullname);

  const [api, contextHolder] = notification.useNotification();
  const successNotification = (type: NotificationType) => {
    api[type]({
      message: 'Success!',
      description:
        'Your account has been created successfully!',
    });
  };

  const errorNotification = (type: NotificationType) => {
    api[type]({
      message: 'Error!',
      description:
        'Something Failed!',
    });
  };
  
  const handleSignUp = async () => {
    try {
      const data = await form.validateFields();
      const res:any = await apis.signup(data);
      if(res.status) {
        dispatch(signup(res.payload.token));
        successNotification("success");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (error) {
      errorNotification("error");
      console.error("Signup failed:", error);
    }
  };

  const goToSignin = () => {
    navigate("/signin");
  }

  return (
    <Flex justify="center" style={{ padding: 0 }}>
      {contextHolder}
      <Flex
        vertical
        justify="space-between"
        align="center"
        gap="25px"
        style={{ width: "450px", margin: "30px 10px 50px" }}
        className="full-mobile"
      >
        <Header />
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
            Create Your Account
          </Title>
          <Form
            name="signup-form"
            layout={"vertical"}
            form={form}
            style={{ width: "100%", marginTop: "32px" }}
          >
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname!",
                },
              ]}
              style={{
                marginBottom: "12px",
              }}
              label={
                <h5
                  style={{
                    color: "rgb(75 85 99)",
                    fontSize: "13px",
                    margin: "0 0 5px",
                  }}
                >
                  Full Name
                </h5>
              }
            >
              <Input placeholder="" />
            </Form.Item>
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
                    margin: "0 0 5px",
                  }}
                >
                  Phone Number
                </h5>
              }
            >
              <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />
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
            <Form.Item
              name="confirmPassword"
              dependencies={['password']} 
              rules={[
                { required: true, message: "Please confirm your password!" },
                // Custom validator for password match
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Password does not match!'));
                  },
                }),
              ]}
              label={
                <h5
                  style={{
                    color: "rgb(75 85 99)",
                    fontSize: "13px",
                    margin: "0 0 5px",
                  }}
                >
                  Confirm Password
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
                onClick={handleSignUp}
              >
                Sign Up
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
                onClick={goToSignin}
              >
                Already have an account?
              </a>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
