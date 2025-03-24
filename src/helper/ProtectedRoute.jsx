import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const user = localStorage.getItem("token")
  

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;