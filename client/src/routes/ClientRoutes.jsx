import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from "js-cookie"
const ClientRoutes = () => {
  const isLogin = Cookies.get("token");
  const isUser = Cookies.get("type") === "user";
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  if (!isUser) {
    return <Navigate to="/admin-dashboard" />;
  }

  return <Outlet />;
}

export default ClientRoutes
