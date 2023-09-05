import { useEffect, useState } from 'react'
import { PerfilGithub } from './components/PerfilGithub';
import styles from './app.module.css';

function App() {
  const [perfil, setPerfil] = useState({});
  const [exibePerfil, setExibePerfil] = useState(false);

  useEffect(() => {
    async function carregaPerfil() {
      const response = await fetch('https://api.github.com/users/lmaoclost');
      const perfil = await response.json();
      setPerfil(perfil);
    }
    carregaPerfil();
  }, [])

  const alternaVisibilidade = () => {
    setExibePerfil((valorAnterior) => !valorAnterior);
  }

  return (
    <main className={styles.main}>
      <section id="card" className={styles.cardSection}>
        <button onClick={alternaVisibilidade}>Exibe Perfil</button>
        <div className={styles.cardContainer}>
          {exibePerfil && (<PerfilGithub perfil={perfil} />)}
        </div>
      </section>
    </main>
  )
}

export default App
