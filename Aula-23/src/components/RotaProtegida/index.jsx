import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function RotaProtegida({ children }) {
  const { token } = useAuth();

  if (!token) {
    alert("Você não tem permissão");
    return <Navigate to="/" replace />
  }

  return children;
}