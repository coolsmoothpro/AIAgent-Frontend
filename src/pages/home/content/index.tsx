import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography, Input, Form } from "antd";
import PhoneInput from "antd-phone-input";
import { apis } from "@/apis";

const { TextArea } = Input;

const AppContent: React.FC = () => {
	const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleCall = async() => {
        const formData = await form.validateFields(); console.log(formData);
 
        setLoading(true);

        const res:any = await apis.aiwelcome(formData);

        if (res.call_sid) {
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    return (
        <Flex vertical>
            <Flex>
                <Flex 
                    vertical
                    style={{ marginTop: 120, marginLeft: 250, marginBottom: 150, zIndex: 1 }}
                >
                    <Typography style={{ color: "#335B92", fontSize: 55, fontFamily: "Poppins", fontWeight: 500, textDecoration: "underline" }}>Supercharge Your Customer</Typography>
                    <Typography style={{ color: "#335B92", fontSize: 55, fontFamily: "Poppins", fontWeight: 500, textDecoration: "underline" }}>Calls with AI Automation</Typography>
                    <Typography style={{ marginTop: 50, color: "#335B92", fontSize: 25, fontFamily: "Poppins", fontWeight: 400 }}>Experience human-like conversations,</Typography>
                    <Typography style={{ color: "#335B92", fontSize: 25, fontFamily: "Poppins", fontWeight: 400 }}>boost  productivity, and scale</Typography>
                    <Typography style={{ color: "#335B92", fontSize: 25, fontFamily: "Poppins", fontWeight: 400 }}>your outreach effortlessly.</Typography>
                    
                    <Flex style={{marginTop: 100}}>
                        <Button
                            type="primary"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none", // Remove default button border
                            }}
                                onClick={() => {
                                    navigate("/signup");
                                }}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            variant="outlined"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                borderColor: "#335B92",
                                borderWidth: 2,
                                color: "#335B92",
                                marginLeft: 50,
                            }}
                                onClick={() => {
                                    navigate("/signup");
                                }}
                        >
                            View Demo
                        </Button>
                    </Flex>
                </Flex>
                <Flex>
                    <img src="images/Hero_Image.png" style={{ position: "absolute", left: 500, top: 30, width: 1320, zIndex: -1 }}/>
                </Flex>
            </Flex>
            <Flex
                vertical
                align="center"
                style={{ width: "100%",
                    background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}
            >
                <img src="images/path2.png" style={{ width: "100%", opacity: 0.1, zIndex: 1 }}/>
                <Flex vertical align="center" style={{position:"absolute", marginTop: 70}}>
                    <Typography style={{ color: "#ffffff", fontSize: 18, fontFamily: "Poppins" }}>Lead Goblin</Typography>
                    <Typography style={{ color: "#ffffff", fontSize: 30, fontWeight: "bold", fontFamily: "Poppins" }}>Features</Typography>
                </Flex>
                <Flex style={{ position: "absolute", marginTop: 300, zIndex: 2 }} gap={30}>
                    <Flex vertical align="center" justify="center" className="features-block" style={{ width: 350, height: 500, borderRadius: 13, backgroundColor: "#ffffff", padding: 40 }}>
                        <Flex align="center" justify="center" style={{ width: 110, height: 110, marginTop: -40, borderRadius: "50%", background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}>
                            <img src="images/automated_testing_svgrepo_com1.png"/>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 15 }}>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>Human-Like</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>Voice:</Typography>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 50, marginBottom: 35 }}>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Automate Calls</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>That Feel Natural, Ipsum is</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Simply Dummy Text Of The</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Printing And Typesetting</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Industry.</Typography>
                        </Flex>
                        <Button
                            type="primary"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none",
                                width: 140,
                                position: "absolute",
                                bottom: 50
                            }}
                        >
                            See More
                        </Button>
                    </Flex>
                    <Flex vertical align="center" className="features-block" style={{ width: 350, height: 500, borderRadius: 13, backgroundColor: "#ffffff", padding: 40 }}>
                        <Flex align="center" justify="center" style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}>
                            <img src="images/Crm_icon_vector.png"/>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 15 }}>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>Seamless CRM</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>Integration:</Typography>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 50, marginBottom: 35 }}>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Sync Data In Real Time Lorem</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Ipsum Is Simply Dummy Text</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Of The Printing And</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Typesetting Industry</Typography>
                        </Flex>
                        <Button
                            type="primary"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none",
                                width: 140,
                                position: "absolute",
                                bottom: 50
                            }}
                        >
                            See More
                        </Button>
                    </Flex>
                    <Flex vertical align="center" className="features-block" style={{ width: 350, height: 500, borderRadius: 13, backgroundColor: "#ffffff", padding: 40 }}>
                        <Flex align="center" justify="center" style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}>
                            <img src="images/Group.png" />
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 15 }}>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>24/7 Availability</Typography>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 50, marginBottom: 35 }}>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Never Miss A Customer. Ipsum Is</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Simply Dummy Text Of The</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Printing And Typesetting Industry</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Ipsum Is Simply Dummy Text Of</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>The Printing And Typesetting</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Industry.</Typography>
                        </Flex>
                        <Button
                            type="primary"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none",
                                width: 140,
                                position: "absolute",
                                bottom: 50
                            }}
                        >
                            See More
                        </Button>
                    </Flex>
                    <Flex vertical align="center" className="features-block" style={{ width: 350, height: 500, borderRadius: 13, backgroundColor: "#ffffff", padding: 40 }}>
                        <Flex align="center" justify="center" style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}>
                            <img src="images/Vector.png" />
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 15 }}>
                            <Typography style={{ color: "#335B92", fontSize: 18, fontWeight: 600, textDecoration: "underline" }}>Real-Time Analytics</Typography>
                        </Flex>
                        <Flex vertical align="center" style={{ marginTop: 50, marginBottom: 35 }}>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Track Performance Instantly.</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Ipsum is Simply Dummy Text</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Of The Printing And</Typography>
                            <Typography style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto" }}>Typesetting Industry. Ipsum Is</Typography>
                        </Flex>
                        <Button
                            type="primary"
                            className="gradient-button"
                            style={{
                                borderRadius: "15px",
                                fontSize: "15px",
                                fontWeight: "bold",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none",
                                width: 140,
                                position: "absolute",
                                bottom: 50
                            }}
                        >
                            See More
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex vertical align="center" style={{ backgroundColor: "#ffffff", marginTop: -120 }}>
                <img src="images/Background_OBJECTS.png" style={{ width: "100%", position: "absolute" }} />
                <Button
                    type="primary"
                    className="gradient-button"
                    style={{
                        borderRadius: "15px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                        border: "none",
                        width: 300,
                        height: 50,
                        marginTop: 160
                    }}
                >
                    Watch The Magic
                </Button>
                <Flex align="center" style={{ marginTop: 50 }} gap={60}>
                    <img src="images/Video_container.png" />
                    <Flex style={{ height: 400, width: 15, borderRadius: 10, background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)" }}> </Flex>
                    <Flex vertical>
                        <Typography
                            style={{ color: "#335B92", fontSize: 30, fontFamily: "Poppins", fontWeight: 700 }}
                        >Opportunity Of Voice AI Technology
                        </Typography>
                        <Typography
                            style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto", marginTop: 40 }}
                        >
                            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum <br />
                            Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown <br />
                            Printer Took A Galley Of Type And Scrambled it To Make A Type Specimen Book.
                        </Typography>
                        <Typography
                            style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto", marginTop: 40 }}
                        >
                            It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, <br />
                            Remaining Eseentially Unchanged. It Was Popularised In The 1960s With The Release Of <br />
                            Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop <br />
                            Publishing Software Like Aldus PageMaker Including Versions Of Lorem Ipsum.
                        </Typography>
                        <Typography
                            style={{ color: "#335B92", fontSize: 14, fontWeight: 400, fontFamily: "Roboto", marginTop: 40 }}
                        >
                            And More Recently With Desktop Publishing Software Like Aldus PageMaker Including <br />
                            Versions Of Lorem Ipsum.
                        </Typography>
                        <Button
                            type="primary"
                            style={{
                                borderRadius: "51px",
                                fontSize: "16px",
                                background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                border: "none",
                                width: 300,
                                height: 40,
                                fontWeight: 500,
                                marginTop: 40
                            }}
                        >
                            Experience The Full Demo
                        </Button>
                    </Flex>
                </Flex>
                
                <img src="images/right_Divided_line.png" style={{ width: "85%", marginTop: -100 }} />
                
                <Flex vertical align="center" style={{ zIndex: 3 }}>
                    <Button
                        type="primary"
                        className="gradient-button"
                        style={{
                            borderRadius: "15px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                            border: "none",
                            width: 300,
                            height: 50,
                            marginTop: 50,
                            marginBottom: 70
                        }}
                    >
                        Our Pricing
                    </Button>
                    <Flex gap={60}>
                        <Flex 
                            vertical
                            align="center"                            
                            className="pricing-block"
                            style={{
                                width: 350,
                                height: 500,
                                borderRadius: 47,
                                border: "2px solid #335B92",
                                background: "linear-gradient(to bottom right,  #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%, transparent 110px) no-repeat",
                                backgroundSize: "100% 110px"
                            }}
                        >
                            <Flex vertical align="center" style={{ marginTop: 25, marginBottom: 15 }}>
                                <Typography style={{ color: "#ffffff", fontSize: 20, fontFamily: "Poppins", fontWeight: 700 }}>Basic Plan</Typography>
                                <Typography style={{ color: "#ffffff", fontSize: 13, fontFamily: "Roboto", fontWeight: 500 }}>Lorem Ipsum Is Simply</Typography>
                            </Flex>
                            <Flex
                                align="center"
                                justify="center"
                                style={{
                                    width: 250,
                                    height: 70,
                                    borderRadius: 15,
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)",
                                    marginBottom: 50
                                }}
                            >
                                <Typography style={{ fontSize: 35, fontWeight: "bold" }}>$66/Month</Typography>
                            </Flex>
                            <Flex vertical >
                                <Flex gap={10}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Unlimited Calls</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Advanced Analytics</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Lorem Ipsum Has</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Lorem Ipsum</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Unlimited Voice</Typography>
                                </Flex>
                            </Flex>
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: "51px",
                                    fontSize: "16px",
                                    background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                    border: "none",
                                    width: 150,
                                    height: 40,
                                    fontWeight: 500,
                                    marginTop: 40
                                }}
                            >
                                Select Plan
                            </Button>
                        </Flex>
                        <Flex 
                            vertical
                            align="center"
                            className="pricing-block"
                            style={{
                                width: 350,
                                height: 500,
                                borderRadius: 47,
                                border: "2px solid #335B92",
                                background: "linear-gradient(to bottom right,  #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%, transparent 110px) no-repeat, #009CD8 0 111px",
                                backgroundSize: "100% 110px, 100% 100%"
                            }}
                        >
                            <Flex vertical align="center" style={{ marginTop: 25, marginBottom: 15 }}>
                                <Typography style={{ color: "#ffffff", fontSize: 20, fontFamily: "Poppins", fontWeight: 700 }}>Pro Plan</Typography>
                                <Typography style={{ color: "#ffffff", fontSize: 13, fontFamily: "Roboto", fontWeight: 500 }}>Lorem Ipsum Is Simply</Typography>
                            </Flex>
                            <Flex
                                align="center"
                                justify="center"
                                style={{
                                    width: 250,
                                    height: 70,
                                    borderRadius: 15,
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)",
                                    marginBottom: 50
                                }}
                            >
                                <Typography style={{ fontSize: 35, fontWeight: "bold" }}>$166/Month</Typography>
                            </Flex>
                            <Flex vertical >
                                <Flex gap={10}>
                                    <img src="images/white_check.png"/>
                                    <Typography style={{ color: "#ffffff", fontWeight: 500 }}>Unlimited Calls</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/white_check.png" />
                                    <Typography style={{ color: "#ffffff", fontWeight: 500 }}>Advanced Analytics</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/white_check.png" />
                                    <Typography style={{ color: "#ffffff", fontWeight: 500 }}>Lorem Ipsum Has</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/white_check.png" />
                                    <Typography style={{ color: "#ffffff", fontWeight: 500 }}>Lorem Ipsum</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/white_check.png" />
                                    <Typography style={{ color: "#ffffff", fontWeight: 500 }}>Unlimited Voice</Typography>
                                </Flex>
                            </Flex>
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: "51px",
                                    fontSize: "16px",
                                    background: "#ffffff",
                                    color: "#335B92",
                                    border: "1px solid #335B92",
                                    width: 150,
                                    height: 40,
                                    fontWeight: 500,
                                    marginTop: 40
                                }}
                            >
                                Select Plan
                            </Button>
                        </Flex>
                        <Flex 
                            vertical
                            align="center"
                            className="pricing-block"
                            style={{
                                width: 350,
                                height: 500,
                                borderRadius: 47,
                                border: "2px solid #335B92",
                                background: "linear-gradient(to bottom right,  #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%, transparent 110px) no-repeat",
                                backgroundSize: "100% 110px"
                            }}
                        >
                            <Flex vertical align="center" style={{ marginTop: 25, marginBottom: 15 }}>
                                <Typography style={{ color: "#ffffff", fontSize: 20, fontFamily: "Poppins", fontWeight: 700 }}>Enterprise Plan</Typography>
                                <Typography style={{ color: "#ffffff", fontSize: 13, fontFamily: "Roboto", fontWeight: 500 }}>Lorem Ipsum Is Simply</Typography>
                            </Flex>
                            <Flex
                                align="center"
                                justify="center"
                                style={{
                                    width: 250,
                                    height: 70,
                                    borderRadius: 15,
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.25)",
                                    marginBottom: 50
                                }}
                            >
                                <Typography style={{ fontSize: 35, fontWeight: "bold" }}>$566/Month</Typography>
                            </Flex>
                            <Flex vertical >
                                <Flex gap={10}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Unlimited Calls</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Advanced Analytics</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Lorem Ipsum Has</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Lorem Ipsum</Typography>
                                </Flex>
                                <Flex gap={10} style={{ marginTop: 10 }}>
                                    <img src="images/check.png" />
                                    <Typography style={{ color: "#325B91", fontWeight: 500 }}>Unlimited Voice</Typography>
                                </Flex>
                            </Flex>
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: "51px",
                                    fontSize: "16px",
                                    background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                    border: "none",
                                    width: 150,
                                    height: 40,
                                    fontWeight: 500,
                                    marginTop: 40
                                }}
                            >
                                Select Plan
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex 
                    vertical 
                    align="center"
                    style={{
                        width: "100%",
                        background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                        marginTop: 100,
                        padding: 80
                    }}
                >
                    <Typography style={{ fontSize: 24, color: "#ffffff", fontWeight: 600, fontFamily: "Poppins" }}>Start Your Free Two-Week</Typography>
                    <Typography style={{ fontSize: 24, color: "#ffffff", fontWeight: 600, fontFamily: "Poppins" }}>Trial Today</Typography>
                    <Typography style={{ fontSize: 14, color: "#ffffff", fontWeight: 500, fontFamily: "Roboto", marginTop: 10 }}>No credit card, no commitment</Typography>
                    
                    <Flex style={{ marginTop: 50 }} align="center" justify="center" gap={30}>
                        <Input size="large" placeholder="Enter your email" style={{ borderRadius: 15, width: 400 }} />
                        <Button
                            type="primary"
                            style={{
                                borderRadius: 10,
                                fontSize: "16px",
                                background: "#ffffff",
                                color: "#335B92",
                                width: 250,
                                height: 42,
                                fontWeight: 600,
                            }}
                        >
                            Try For Free
                        </Button>
                    </Flex>
                </Flex>

                <img src="images/left_Divided_line.png"  style={{ width: "85%" }}/>
                
                <Flex
                    vertical
                    style={{
                        width: 750,
                        height: 700,
                        background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                        borderRadius: 15,
                        marginTop: -100,
                        padding: "80px 100px",
                    }}
                >
                    <Flex gap={25} align="center">
                        <img src="images/Agent_image.png" />
                        <Flex vertical>
                            <Typography style={{ color: "#ffffff", fontSize: 14, fontFamily: "Roboto", fontWeight: 600 }}>Alyse Grace</Typography>
                            <Flex
                                style={{
                                    backgroundColor: "#1BE309",
                                    borderRadius: 15,
                                    padding: "3px 15px",
                                    marginTop: 5
                                }}
                            >
                                <Typography style={{ color: "#ffffff", fontSize: 11, fontWeight: 600 }}>Available Now</Typography>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex vertical align="center" style={{ marginTop: 70 }}>
                        <Form
                            
                            form={form}
                            >
                            <Form.Item
                                name="fullname"
                                rules={[
                                    { required: true, message: "Please input your full name." },
                                ]}
                            >
                                <Input 
                                    placeholder="Full Name" 
                                    prefix={<img src="images/icon_park_solid_people_left.png" style={{ marginLeft: 10 }} />}
                                    style={{ borderRadius: '15px'}} 
                                />
                            </Form.Item>
                            <Flex style={{marginBottom: "40px"}}> </Flex>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email." },
                                ]}
                            >
                                <Input 
                                    placeholder="Enter Your Email Address" 
                                    prefix={<img src="images/ic_outline_email.png" style={{ marginLeft: 10 }} />}
                                    style={{ borderRadius: '15px' }} 
                                />
                            </Form.Item>
                            <Flex style={{marginBottom: "40px"}}> </Flex>
                            <Form.Item
                                name="phone"
                                rules={[
                                    { required: true, message: "Please input your phone number." },
                                ]}
                            >
                                <Flex align="center" style={{ width: "100%", backgroundColor: "#ffffff", borderRadius: '15px', padding: "5px 20px", marginBottom: 4 }}>
                                    <img src="images/ic_baseline_phone.png" style={{ marginRight: '10px' }} width={25} height={25} alt="Phone Icon" />
                                    <PhoneInput
                                        placeholder="Phone Number" 
                                    />
                                </Flex>
                            </Form.Item>
                            <Flex style={{marginBottom: "40px"}}> </Flex>
                            <Button
                                type="primary"
                                className="call_me_btn"
                                style={{
                                    borderRadius: 10,
                                    fontSize: "16px",
                                    background: "#ffffff",
                                    color: "#335B92",
                                    width: 250,
                                    height: 40,
                                    fontWeight: 600,
                                }}
                                loading={loading}
                                onClick={handleCall}
                            >
                                Call Me Now
                            </Button>
                        </Form>
                    </Flex>
                </Flex>
                
                <Flex vertical align="center" justify="center" style={{ marginTop: 100, width: "100%" }}>
                    <Typography style={{ fontSize: 24, color: "#335B92", fontWeight: 700}}>Contact Us</Typography>
                    <Typography style={{ fontSize: 14, color: "#335B92", fontWeight: 400, textAlign: "center", marginTop: 10 }}>
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. <br />
                        Lorem Ipsum Has Been The Industry's Standard Dummy
                    </Typography>
                    <Flex 
                        vertical
                        style={{
                            width: "70%",
                            padding: "60px 70px",
                            borderRadius: 15,
                            border: "2px solid #335B92",
                            marginTop: 100,
                            marginBottom: 50
                        }}
                    >
                        <Flex style={{ width: "100%", marginBottom: 30 }} gap={50}>
                            <Input 
                                placeholder="Full Name" 
                                style={{ 
                                    borderRadius: '15px',
                                    width: "70%",
                                    background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                    color: "#ffffff",
                                }}
                                className="contact-form"
                            />
                            <Input 
                                placeholder="Enter Your Email Address" 
                                style={{ 
                                    borderRadius: '15px',
                                    width: "70%",
                                    background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                    color: "#ffffff",
                                }}
                                className="contact-form"
                            />
                        </Flex>
                        <Input 
                            placeholder="Subject" 
                            style={{ 
                                borderRadius: '15px',
                                background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                color: "#ffffff",
                                marginBottom: 30
                            }}
                            className="contact-form"
                        />
                        <TextArea 
                            placeholder="Your Message" 
                            style={{ 
                                borderRadius: '15px',
                                background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                                color: "#ffffff",
                                height: 150
                            }}
                            className="contact-form"
                        />
                    </Flex>
                    <Button
                        type="primary"
                        style={{
                            borderRadius: 15,
                            fontSize: "16px",
                            background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                            color: "#ffffff",
                            width: 350,
                            height: 40,
                            fontWeight: 600,
                        }}
                    >
                        Send Message
                    </Button>
                </Flex>

                <Flex
                    vertical
                    align="center"
                    style={{
                        width: "100%",
                        padding: "30px 0",
                        background: "linear-gradient(to bottom right, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                        marginTop: 100,
                    }}
                >
                    {/* <img src="images/main_logo.png" width={100}/> */}
                    <Flex align="center" style={{ marginTop: 70, marginBottom: 30 }} gap={25}>
                        <Flex align="center" gap={5}>
                            <img src="images/footer_email.png" alt="" />
                            <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontWeight: 400, fontSize: 17, color: "#ffffff" }}>support@leadgoblin.ai</Typography>
                        </Flex>
                        <Flex align="center" gap={5}>
                            <img src="images/footer_location.png" alt="" />
                            <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontWeight: 400, fontSize: 17, color: "#ffffff" }}>California, United States</Typography>
                        </Flex>
                        <Flex align="center" gap={5}>
                            <img src="images/footer_phone.png" alt="" />
                            <Typography style={{ fontFamily: "Poppins", fontStyle: "italic", fontWeight: 400, fontSize: 17, color: "#ffffff" }}>(555) 555-1234</Typography>
                        </Flex>
                    </Flex>
                    <img src="images/resources.png" alt="" />
                    <Flex gap={100} style={{ marginTop: 50, marginBottom: 70 }}>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Privacy Policy</Typography>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Docs</Typography>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Features</Typography>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Disclaimer</Typography>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Newsletter Signup Field</Typography>
                        <Typography style={{ fontFamily: "Poppins", fontWeight: 500, color: "#ffffff", fontSize: 20 }}>Terms Of Service</Typography>
                    </Flex>
                    <Flex gap={30} >
                        <img src="images/instagram.png" alt="" />
                        <img src="images/facebook.png" alt="" />
                        <img src="images/linkedin.png" alt="" />
                    </Flex>
                    <Flex style={{ borderBottom: "2px solid #ffffff", marginBottom: 30, marginTop: 50, width: "100%" }}> </Flex>
                    <Typography style={{ color: "#ffffff", fontSize: 14, fontFamily: "Poppins", fontWeight: 600 }}>©2024-COPYRIGHT</Typography>
                </Flex>
            </Flex>

            
        </Flex>
    );
};

export default AppContent;
