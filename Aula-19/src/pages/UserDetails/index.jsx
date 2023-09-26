import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GithubContext } from '../../contexts/GithubContext';
import { PerfilGithub } from '../../components/PerfilGithub';

import styles from './userDetails.module.css';

export function UserDetails() {
  const { repositoryOwner } = useParams();
  const { listaDePerfis, buscaPerfilPeloLogin } = useContext(GithubContext);
  const navigate = useNavigate();


  const perfil = buscaPerfilPeloLogin(listaDePerfis, { login: repositoryOwner });

  useEffect(() => {
    if (!perfil) {
      navigate('/')
    }
  })

  return (
    <section className={styles.userDetails}>
      <div className={styles.cardContainer}>
        <PerfilGithub perfil={perfil} />
      </div>
    </section>
  )
}