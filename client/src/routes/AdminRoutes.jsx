import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminRoutes = () => {
  const isLogin = Cookies.get("token");
  const isAdmin = Cookies.get("type") === "admin";

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />; 
  }

  return <Outlet />;
};

export default AdminRoutes;
