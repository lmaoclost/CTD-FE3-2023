import styles from './perfil.module.css';

export function PerfilGithub({ perfil }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardUserImage} src={perfil.avatar_url} alt={`imagem do usuário ${perfil.login}`} />
      </div>
      <h3>Oi eu sou {perfil.name}</h3>
    </div>
  )
}