import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/navbar";
import "./style.scss";

export const MainLayout: FC = () => {
  return (
    <div id="main-layout">
      <Navbar/>

      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};