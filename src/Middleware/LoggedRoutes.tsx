
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Provider/Protected';


const LoggedRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default LoggedRoutes;