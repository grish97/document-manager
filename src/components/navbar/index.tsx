import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom"
import { LogoutOutlined } from '@ant-design/icons';
import { useAuth } from "hooks";
import "./style.scss";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const onLogoutUser = () => {
    logout();
    navigate("/auth/signin");
  };

  return (
    <div className="navbar">
      <div className="brand">Document Manager</div>

      <div className="pages">
        <Link to="/">Dashboard</Link>
        <Link to="/documents">Documents</Link>
        <LogoutOutlined style={{ fontSize: '20px' }} onClick={onLogoutUser} />
      </div>
    </div>
  );
};