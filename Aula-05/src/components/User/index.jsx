import styles from './User.module.css'

export default function User({ user }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardUserImage} src={user.image} alt={`imagem do usuário ${user.userName}`} />
      </div>
      <h3>Oi eu sou {user.userName}</h3>
    </div>
  )
}