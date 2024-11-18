import { useNavigate } from "react-router-dom";
import { Flex, Typography, Button} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { BotIcon } from "@/assets/icon";
import { GREEN_COLOR } from "@/constants";

const Header = () => {
  const navigate = useNavigate();

  const handleReturn = () => {    
    navigate("/");
  };
  
  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="8px"
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        width: "100%",
        padding: "15px 0px 0px",
        cursor: "pointer"
      }}
    >
      <Button type="link" onClick={handleReturn} style={{ padding: 0 }}>
        <LeftOutlined style={{ color: GREEN_COLOR }} />
        <img src={BotIcon} width="30px" />
        <Typography style={{ fontSize: "20px" }}>
          AI<span style={{ color: GREEN_COLOR }}>Agent</span>
        </Typography>
      </Button>      
    </Flex>
  );
};

export default Header;
