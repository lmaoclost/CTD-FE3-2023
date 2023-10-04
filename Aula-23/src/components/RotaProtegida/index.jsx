import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function RotaProtegida({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}