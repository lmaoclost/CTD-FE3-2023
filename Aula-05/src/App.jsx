import User from './components/User';
import styles from './App.module.css';

const listaDeUsuarios = [
  {
    userName: 'Renan',
    image: 'http://github.com/lmaoclost.png'
  },
  {
    userName: 'Deyse',
    image: 'http://github.com/deysebonisegnia.png'
  },
  {
    userName: 'Mauricio',
    image: 'http://github.com/mauricior38.png'
  }
]

function App() {

  return (
    <main className={styles.main}>
      <section id="card" className={styles.cardSection}>
        <h2>Usuários</h2>

        <div className={styles.cardContainer}>
          {listaDeUsuarios && (
            listaDeUsuarios.map((usuario, index) => {
              return (
                <User key={index} user={usuario} />
              )
            })
          )}
        </div>
      </section>
    </main>
  )
}

export default App
