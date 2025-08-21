import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from "js-cookie"
const AuthRoutes = () => {
  const token = Cookies.get("token")
  return (
    <div>
      {token ? <Navigate to={"/"}/> : <Outlet />}      
    </div>
  )
}

export default AuthRoutes
