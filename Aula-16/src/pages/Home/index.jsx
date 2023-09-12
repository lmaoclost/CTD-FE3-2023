import { useState } from 'react'
import { PerfilGithub } from '../../components/PerfilGithub';
import api from '../../services/api';
import styles from './home.module.css';

export function Home() {
  // Estado para a listagem do perfil
  const [perfil, setPerfil] = useState({});

  // Estado para o Form
  const [usuarioASerBuscado, setUsuarioASerBuscado] = useState('');

  const buscaDadosDoPerfil = async (event) => {
    event.preventDefault();

    if (usuarioASerBuscado.length > 0) {
      try {
        const response = await api.get(`/users/${usuarioASerBuscado}`);
        setPerfil(response.data);
      } catch (error) {
        if (error.response.data.message === "Not Found") {
          alert('Usuário não encontrado')
        }
      }
    }
    else {
      alert('Campo de pesquisa deve ser preenchido.')
    }
  }

  return (
    <>
      <main className={styles.main}>
        <section id='card' className={styles.cardSection}>
          <form onSubmit={buscaDadosDoPerfil}>
            <input
              type="text"
              name="nomeUsuario"
              id="nomeUsuario"
              onChange={(event) => setUsuarioASerBuscado(event.target.value)}
              value={usuarioASerBuscado}
            />
            <button type="submit">Pesquisar</button>
          </form>
          <div className={styles.cardContainer}>
            {perfil.login && (<PerfilGithub perfil={perfil} />)}
          </div>
        </section>
      </main>
    </>
  )
}