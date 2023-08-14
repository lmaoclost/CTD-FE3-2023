import { useState } from 'react';
import User from './components/User';
import UserForm from './components/UserForm';
import styles from './App.module.css';

function App() {
  const [userList, setUserList] = useState([]);

  const handleUserSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, userName } = Object.fromEntries(formData);

    if (name.length > 3 && userName.length > 3) {
      setUserList([...userList, { name, userName }])
    }

    return
  }

  const removeUserFromList = (userToBeRemoved) => {
    const newList = userList.filter((user) => {
      return userToBeRemoved !== user
    });
    setUserList(newList);
  }

  return (
    <main className={styles.main}>
      <UserForm handleSubmit={handleUserSubmit} />
      <section id="card" className={styles.cardSection}>
        <h3>Usuários</h3>

        <div className={styles.cardContainer}>
          {userList && (
            userList.map((usuario, index) => {
              return (
                <User
                  key={index}
                  user={usuario}
                  removeUserFromList={() => removeUserFromList(usuario)}
                />
              )
            })
          )}
        </div>
      </section>
    </main>
  )
}

export default App
