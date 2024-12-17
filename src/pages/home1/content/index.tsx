import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from "antd";
import { GREEN_COLOR } from "@/constants";

import {
  TextBasedAdviceIcon,
  SmartInsightsIcon,
  BankLevelSecurityIcon,
} from "@/assets/icon";

const { Title } = Typography;

const AppContent: React.FC = () => {
	const navigate = useNavigate();
  return (
    <Flex vertical justify="space-between" gap="10vw">
      <Flex vertical justify="center" align="center" gap="0">
        <Title style={{ fontWeight: "bold", fontSize: "36px" }}>
          Sounds like a human, performs like an AI
        </Title>
        <Title
          style={{
            fontSize: "18px",
            lineHeight: "1.75rem",
            color: "rgb(75 85 99)",
            marginTop: "0px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "4vw",
						maxWidth: "700px",
            padding: "0 32px"
          }}
        >
          Downsize your staff and increase your reach at the click of a button. Make thousands of calls, book more appointments, and never miss a lead again with your very own no code 24/7 human AI agent.
        </Title>
        <Button
          type="primary"
          style={{
            borderRadius: "90px",
            fontSize: "1.125rem",
            fontWeight: "500",
            padding: "23px 28px ",
            backgroundColor: GREEN_COLOR,
          }}
					onClick={() => {navigate("/signup")}}
        >
          <p>Get custom made voice AI</p>
          <p>agents for your business</p>
        </Button>
      </Flex>
      <Flex justify="space-around" gap="large" className="introduction" >
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img src={TextBasedAdviceIcon} alt="Text Based Advice" width="40px"/>
          <Title level={3}>AI Receptionist</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            We are dedicated to redefining and improving customer engagement with AI powered communication
          </p>
        </Flex>
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img src={SmartInsightsIcon} alt="Text Based Advice" width="40px" />
          <Title level={3}>AI Agent</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            AI Agent for Inbound and Outbound
          </p>
        </Flex>
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img
            src={BankLevelSecurityIcon}
            alt="Text Based Advice"
            width="40px"
          />
          <Title level={3}>Security</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            Your data is protected with enterprise-grade encryption
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppContent;
