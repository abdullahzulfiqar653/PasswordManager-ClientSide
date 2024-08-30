import { Navigate } from "react-router-dom";
import { useAuth } from '../AuthContext';

const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace />; 
  }

  return element;
};

export default PublicRoute;
