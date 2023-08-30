import { useState } from 'react'
import { CardSection } from './components/CardSection';
import styles from './app.module.css';
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [listaDeCores, setListaDeCores] = useState([]);
  const [nomeDaCor, setNomeDaCor] = useState('');
  const [hexDaCor, setHexDaCor] = useState('');
  const [formValido, setFormValido] = useState(true);

  const validaFormulario = (nomeDaCor, hexDaCor) => {
    /* Validações realizadas:
      -> Nome da cor: possuir ao menos 3 caracteres;
      -> Código da cor: possuir ao menos 7 caracteres
      -> Código da cor: o primeiro caractere deve ser o "#" (NOTA: Regra adicionada pelo professor)
    */

    if (
      (nomeDaCor.length >= 3)
      && (hexDaCor.length >= 7)
      && (hexDaCor.startsWith("#"))
    ) {
      setFormValido(true);
      return true;
    }
    else {
      setFormValido(false);
      return false;
    }
  }

  const adicionaCor = (event) => {
    event.preventDefault();
    const formValidado = validaFormulario(nomeDaCor, hexDaCor);

    if (formValidado) {
      const novaCor = { nomeDaCor: nomeDaCor, hexDaCor: hexDaCor };
      setListaDeCores((listaDeCoresAntiga) => [...listaDeCoresAntiga, novaCor]);
    }
  }

  return (
    <main className={styles.main}>
      <form
        className={`${styles.FormContainer} ${formValido ? '' : styles.FormContainerError}`}
        onSubmit={adicionaCor}
      >
        <h1>ADICIONAR NOVA COR</h1>
        {/* Comece a desenvolver o seu Código por aqui :) */}
        <div className={styles.inputsContainer}>
          <div>
            <label htmlFor="nomeDaCor">Nome</label>
            <input
              type="text"
              name="nomeDaCor"
              id="nomeDaCor"
              placeholder="Escreva o nome da cor"
              onChange={(event) => setNomeDaCor(event.target.value)}
              value={nomeDaCor}
            />
          </div>
          <div>
            <label htmlFor="hexDaCor">Cor</label>
            <input
              type="text"
              name="hexDaCor"
              id="hexDaCor"
              placeholder="Insira sua cor no formato Hexadecimal"
              onChange={(event) => setHexDaCor(event.target.value)}
              value={hexDaCor}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Adicionar</button>
        </div>
      </form>
      {!formValido && (
        <small>
          Por favor, verifique os dados inseridos no formulário
        </small>
      )}
      <CardSection listaDeCores={listaDeCores} />
    </main>
  )
}

export default App