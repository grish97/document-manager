import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateNavigation: FC = () => {
  const { getUser } = useAuth();

  return getUser()
    ? <Outlet />
    : <Navigate to="/auth" />
};