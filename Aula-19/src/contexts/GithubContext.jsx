import { createContext, useState } from 'react';

export const GithubContext = createContext();

export function GithubContextProvider({ children }) {
  const [perfis, setPerfis] = useState([]);

  const buscaPerfilPeloLogin = (perfisAntigos, perfilLogin) => {
    const perfil = perfisAntigos.find((perfilAntigo) => perfilAntigo.login === perfilLogin);
    return perfil
  }

  const addUsuarioALista = (perfilNovo) => setPerfis((perfisAntigos) => {
    // Verifica se perfil Existe
    const perfilExiste = buscaPerfilPeloLogin(perfisAntigos, perfilNovo);

    // Caso o perfil não exista, adiciona
    if (!perfilExiste) {
      return [...perfisAntigos, perfilNovo];
    }

    // Se existe, retorna a lista antiga
    return perfisAntigos
  });

  return (
    <GithubContext.Provider value={{ perfis, addUsuarioALista, buscaPerfilPeloLogin }}>
      {children}
    </GithubContext.Provider>
  )
}