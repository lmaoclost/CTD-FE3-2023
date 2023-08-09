import { useState } from 'react'
import styles from './User.module.css'

export default function User({ user }) {
  const [likeAmount, setLikeAmount] = useState(0);

  const updateLikeAmount = (likeOption) => {
    if (likeOption === 'down' && likeAmount - 1 >= 0) {
      setLikeAmount((likeAmount) => likeAmount - 1)
    }
    if (likeOption === 'up') {
      setLikeAmount((likeAmount) => likeAmount + 1)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardUserImage} src={user.image} alt={`imagem do usuário ${user.userName}`} />
      </div>
      <h3>Oi eu sou {user.userName} e tenho {likeAmount} like{likeAmount > 1 ? 's' : ''}</h3>

      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.likeButton}`} onClick={() => updateLikeAmount('up')}>Like 👍</button>
        <button className={`${styles.button} ${styles.dislikeButton}`} onClick={() => updateLikeAmount('down')}>Dislike 👎</button>
      </div>
    </div>
  )
}