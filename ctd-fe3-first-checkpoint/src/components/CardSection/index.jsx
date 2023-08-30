import { Card } from '../Card';
import styles from './cardSection.module.css';

export function CardSection({ listaDeCores }) {
  return (
    <section>
      <h2>CORES FAVORITAS</h2>
      <div className={styles.listContainer}>
        {listaDeCores && (
          listaDeCores.map((cor, index) => {
            return (
              <Card key={index} cor={cor} />
            )
          })
        )}
      </div>
    </section>
  )
}