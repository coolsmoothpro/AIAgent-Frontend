import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from "antd";

const AppHeader: React.FC = () => {
	const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState<string | null>(null);

    return (
        <Flex justify="space-between" align="center">
            <Flex
                justify="space-between"
                align="center"
                gap="10px"
                style={{ fontSize: "20px", fontWeight: "bold" }}
            >
                <img src="images/main_logo.png" width={230}/>
            </Flex>
            <Flex 
                justify="space-between"
                align="center"
                gap="50px"
                
            >
                <a 
                    href="javascript:void(0);" 
                    onClick={() => setActiveLink('features')} 
                    className="header-pages" 
                    style={{
                        textDecoration: activeLink === 'features' ? 'underline' : 'none',
                        color: activeLink === 'features' ? '#C211A1' : '#335B92',
                    }}>
                    <Typography 
                        style={{ color: activeLink === 'features' ? '#C211A1' : '#335B92', fontSize: 15, fontStyle: "Roboto", fontWeight: 500 }}
                    >Features
                    </Typography>
                </a>
                <a 
                    href="javascript:void(0);" 
                    onClick={() => setActiveLink('demo')} 
                    className="header-pages" 
                    style={{
                        textDecoration: activeLink === 'demo' ? 'underline' : 'none',
                        color: activeLink === 'demo' ? '#C211A1' : '#335B92',
                    }}>
                    <Typography 
                        style={{ color: activeLink === 'demo' ? '#C211A1' : '#335B92', fontSize: 15, fontStyle: "Roboto", fontWeight: 500 }}
                    >Demo
                    </Typography>
                </a>
                <a 
                    href="javascript:void(0);" 
                    onClick={() => setActiveLink('pricing')} 
                    className="header-pages" 
                    style={{
                        textDecoration: activeLink === 'pricing' ? 'underline' : 'none',
                        color: activeLink === 'pricing' ? '#C211A1' : '#335B92',
                    }}>
                    <Typography 
                        style={{ color: activeLink === 'pricing' ? '#C211A1' : '#335B92', fontSize: 15, fontStyle: "Roboto", fontWeight: 500 }}
                    >Pricing
                    </Typography>
                </a>
                <a 
                    href="javascript:void(0);" 
                    onClick={() => setActiveLink('contact')} 
                    className="header-pages" 
                    style={{
                        textDecoration: activeLink === 'contact' ? 'underline' : 'none',
                        color: activeLink === 'contact' ? '#C211A1' : '#335B92',
                    }}>
                    <Typography 
                        style={{ color: activeLink === 'contact' ? '#C211A1' : '#335B92', fontSize: 15, fontStyle: "Roboto", fontWeight: 500 }}
                    >Contact
                    </Typography>
                </a>

                <Button
                    type="primary"
                    className="gradient-button"
                    style={{
                        borderRadius: "9px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #325B91 0%, #2C639A 25%, #1B79B2 50%, #009CD8 100%)",
                        border: "none", // Remove default button border
                    }}
                        onClick={() => {
                            navigate("/signup");
                        }}
                >
                    Try for free
                </Button>
            </Flex>
        </Flex>
    );
};

export default AppHeader;
