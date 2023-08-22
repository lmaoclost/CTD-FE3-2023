import styles from './grocery.module.css'

export default function Grocery({ grocery, toggleGroceryBoughtStatus }) {
  return (
    <div className={styles.card}>
      <input type="checkbox" onClick={toggleGroceryBoughtStatus} />
      <li>
        {grocery.isBought ?
          (
            <del>
              {grocery.amount} {grocery.name}
            </del>
          ) :
          (
            `${grocery.amount} ${grocery.name}`
          )
        }
      </li>
    </div>
  )
}