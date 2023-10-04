import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  const logaUsuario = async () => {
    try {
      const token = 'esseéomeutoken';
      setToken(token);
      localStorage.setItem('githubble-token', token);
    } catch (error) {
      alert('qualquercoisa')
    }
  }

  const deslogaUsuario = () => {
    setToken(null);
    localStorage.removeItem('githubble-token');
  }

  return (
    <AuthContext.Provider value={{ token, logaUsuario, deslogaUsuario }}>
      {children}
    </AuthContext.Provider>
  )
}