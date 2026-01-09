import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, path }: any) => {
  const user = localStorage.getItem("user");

  return user ? children : <Navigate to={path} replace />;
};

export default ProtectedRoute;
