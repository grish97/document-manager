import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useAuth } from "hooks";

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const onSignIn = () => {
    updateUser({
      name: "Ann",
      age: 25,
    });

    navigate("/");
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <div>
        <Button type="primary" icon={<LoginOutlined />} size="large" onClick={onSignIn}>Sign In</Button>
      </div>
    </div>
  );
};