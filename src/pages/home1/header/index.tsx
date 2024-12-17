import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from "antd";
import { GREEN_COLOR } from "@/constants";
import { BotIcon } from "@/assets/icon";

const AppHeader: React.FC = () => {
	const navigate = useNavigate();
  return (
    <Flex justify="space-between" align="center">
      <Flex
        justify="space-between"
        align="center"
        gap="10px"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        <img src={BotIcon} width="30px"/>
        <Typography style={{ fontSize: "20px" }}>AI<span style={{color: GREEN_COLOR}}>Agent</span></Typography>
      </Flex>
      <Flex>
        <Button
          color="primary" 
          variant="outlined"
          
          onClick={() => {navigate("/signin")}}
        >
          Login
        </Button> &nbsp;
        <Button
          type="primary"
          className="green"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            backgroundColor: GREEN_COLOR,
          }}
          onClick={() => {navigate("/signup")}}
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

export default AppHeader;
