import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

export const AuthLayout: FC = () => {
  return (
    <div id="auth-layout">

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};