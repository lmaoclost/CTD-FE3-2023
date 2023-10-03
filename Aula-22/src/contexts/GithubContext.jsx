import { createContext, useEffect, useReducer } from 'react';
import { perfilReducer } from '../reducers/perfilReducer';
export const GithubContext = createContext();

export function GithubContextProvider({ children }) {
  const [perfis, dispatch] = useReducer(perfilReducer, [], () => {
    const localData = localStorage.getItem('githubble-perfis');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('githubble-perfis', JSON.stringify(perfis));
  }, [perfis]);

  const addUsuarioALista = (perfil) => dispatch({ type: 'ADICIONA_PERFIL', payload: perfil });

  const buscaPerfilPeloLogin = (perfisAntigos, perfilLogin) => {
    const perfil = perfisAntigos.find((perfilAntigo) => perfilAntigo.login === perfilLogin);
    return perfil;
  }

  return (
    <GithubContext.Provider value={{ perfis, addUsuarioALista, buscaPerfilPeloLogin }}>
      {children}
    </GithubContext.Provider>
  )
}