//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import styles from './card.module.css';

export function Card({ cor }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: cor.hexDaCor }}
    >
      <span>
        {cor.nomeDaCor}
      </span>
      <h3>
        {cor.hexDaCor}
      </h3>
    </div>
  )
}