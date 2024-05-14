import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;