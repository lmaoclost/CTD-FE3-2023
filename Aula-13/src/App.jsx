import { useState } from 'react'
import { PerfilGithub } from './components/PerfilGithub';

function App() {
  const [exibePerfil, setExibePerfil] = useState(false);

  const alternaVisibilidade = () => {
    setExibePerfil((valorAnterior) => !valorAnterior)
  }

  return (
    <>
      <button
        onClick={alternaVisibilidade}
      >
        {exibePerfil ? 'Esconder' : 'Exibir'} Perfil
      </button>
      {exibePerfil && (<PerfilGithub />)}
    </>
  )
}

export default App
