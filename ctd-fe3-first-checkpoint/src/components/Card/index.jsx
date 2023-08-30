//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import { getContrast } from "polished";
import styles from './card.module.css';

export function Card({ cor }) {
  return (
    <div style={{
      backgroundColor: cor.hexDaCor,
      color: getContrast(cor.hexDaCor, "#FFF") < 3.5 ? "#000" : "#FFF",
    }}
      className={styles.card}>
      <span>{cor.nomeDaCor}</span>
      <h3>{cor.hexDaCor}</h3>
    </div>
  )
}