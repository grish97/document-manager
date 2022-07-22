import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PublicNavigation: FC = () => {
  const { getUser } = useAuth();

  return getUser()
    ? <Navigate to="/" />
    : <Outlet />
};