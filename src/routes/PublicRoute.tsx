import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const user = localStorage.getItem("user");

  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
