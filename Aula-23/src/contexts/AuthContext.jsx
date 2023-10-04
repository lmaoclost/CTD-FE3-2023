import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  const logaUsuario = async () => {
    const token = await setInterval(() => 'esseéomeutoken', 800);

    setToken(token);
  };

  const deslogaUsuario = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, logaUsuario, deslogaUsuario }}>
      {children}
    </AuthContext.Provider>
  )
}