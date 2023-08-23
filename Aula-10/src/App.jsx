import { useState } from 'react';
import { Grocery } from './components/Grocery';
import styles from './app.module.css';

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [groceryName, setGroceryName] = useState('');
  const [groceryAmount, setGroceryAmount] = useState(0);

  const handleGrocerySubmit = (event) => {
    event.preventDefault();

    const newGrocery = { name: groceryName, amount: groceryAmount, isBought: false };
    setGroceryList((state) => [...state, newGrocery]);
  }

  const toggleGroceryBoughtStatus = (groceryToBeToggled) => {
    const listWithToggledStatus = groceryList.map(grocery => {
      if (groceryToBeToggled === grocery) {
        grocery.isBought = !grocery.isBought
      }
      return grocery
    });
    setGroceryList(listWithToggledStatus);
  }

  return (
    <>
      <main className={styles.main}>
        <form className={styles.FormContainer} onSubmit={handleGrocerySubmit}>
          <h3>Add a grocery to your list</h3>
          <input
            type="text"
            name='groceryName'
            id='groceryName'
            placeholder='Type the grocery name'
            onChange={(event) => setGroceryName(event.target.value)}
            value={groceryName}
          />
          <input
            type="number"
            name='groceryAmount'
            id='groceryAmount'
            placeholder='Type the grocery amount'
            onChange={(event) => setGroceryAmount(event.target.value)}
            value={groceryAmount}
          />
          <button
            type="submit"
            disabled={groceryName === ''}
          >Add
          </button>
        </form>
        <section className={styles.listSection}>
          <h3>My groceries</h3>
          <div className={styles.listContainer}>
            <ul>
              {groceryList && (
                groceryList.map((grocery, index) => {
                  return (
                    <Grocery
                      key={index}
                      grocery={grocery}
                      toggleGroceryBoughtStatus={() => toggleGroceryBoughtStatus(grocery)}
                    />
                  )
                })
              )}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
