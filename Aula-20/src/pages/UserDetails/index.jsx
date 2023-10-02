import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import { PerfilGithub } from '../../components/PerfilGithub';
import { GithubContext } from '../../contexts/GithubContext';

import styles from './userDetails.module.css';

export function UserDetails() {
  const { repositoryOwner } = useParams();
  const [repositoriosPerfil, setRepositoriosPerfil] = useState();

  const { perfis, buscaPerfilPeloLogin } = useContext(GithubContext);

  let perfil = buscaPerfilPeloLogin(perfis, repositoryOwner);

  const buscaDadosDoPerfil = useCallback(async () => {
    try {
      const response = await api.get(`/users/${repositoryOwner}/repos`);
      setRepositoriosPerfil(response.data);
    } catch (error) {
      if (error.response.data.message === "Not Found") {
        alert('Usuário não encontrado')
      }
    }
  }, [repositoryOwner]);

  useEffect(() => {
    buscaDadosDoPerfil();
  }, [buscaDadosDoPerfil])

  return (
    <section className={styles.userDetails}>
      <div className={styles.cardContainer}>
        <PerfilGithub perfil={perfil} />
      </div>
      <h1>Esses são os meus repositórios</h1>
      <ul>
        {repositoriosPerfil && repositoriosPerfil.map(repositorio => (
          <li key={repositorio.id}>
            <Link to={`/${repositoryOwner}/${repositorio.name}`}>
              {repositorio.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}