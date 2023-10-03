import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PerfilGithub } from '../../components/PerfilGithub';
import { GithubContext } from '../../contexts/GithubContext';
import { useAxios } from '../../hooks/useAxios';

import styles from './userDetails.module.css';

export function UserDetails() {
  const { repositoryOwner } = useParams();
  const repositoriosPerfil = useAxios(`/users/${repositoryOwner}/repos`);

  const { perfis, buscaPerfilPeloLogin } = useContext(GithubContext);

  let perfil = buscaPerfilPeloLogin(perfis, repositoryOwner);

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