import { useEffect, useState } from 'react'

export function PerfilGithub() {
  const [nomeUsuario, setNomeUsuario] = useState('Andre')
  const [idadeUsuario, setIdadeUsuario] = useState(32)

  useEffect(() => {
    alert(`${nomeUsuario} ENTROU na tela e tem ${idadeUsuario}`)

    return () => {
      alert(`${nomeUsuario} SAIU da tela e tem ${idadeUsuario}`)
    }
  }, [idadeUsuario, nomeUsuario])

  return (
    <div>
      <h1>Olá :)</h1>
      <input
        type="text"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
      />
      <input
        type="number"
        value={idadeUsuario}
        onChange={(e) => setIdadeUsuario(e.target.value)}
      />
    </div>
  )
}