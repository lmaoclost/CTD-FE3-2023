import { useState, useEffect, useCallback } from 'react';
import styles from './perfil.module.css';

export function PerfilGithub({ perfil }) {
  const [perfilNormalizado, setPerfilNormalizado] = useState({})

  const usuarioNormalizado = () => {
    setPerfilNormalizado({
      login: perfil.login,
      imgUrl: perfil.avatar_url,
      nome: perfil.name ? perfil.name : perfil.login
    })
  }

  useEffect(() => {
    usuarioNormalizado();
  }, [usuarioNormalizado])

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.cardUserImage}
          src={perfilNormalizado.imgUrl}
          alt={`Imagem do usuário ${perfilNormalizado.nome}`}
        />
      </div>
      <h3>Oi eu sou {perfilNormalizado.nome}</h3>
    </div>
  )
}