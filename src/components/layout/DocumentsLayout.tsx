import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DocumentsLayout: FC = () => {
  return (
    <div id="documents-layout">
      <Outlet />
    </div>
  );
};