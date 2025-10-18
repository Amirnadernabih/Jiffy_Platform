import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user is logged in, redirect to appropriate sign in based on required role
  if (!user) {
    const redirectPath = requiredRole === 'admin' 
      ? '/auth/professional/sign-in' 
      : '/auth/customer/sign-in';
    return <Navigate to={redirectPath} replace />;
  }

  // If user doesn't have required role, redirect to appropriate sign in
  if (requiredRole && user.role !== requiredRole) {
    const redirectPath = requiredRole === 'admin' 
      ? '/auth/professional/sign-in' 
      : '/auth/customer/sign-in';
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;