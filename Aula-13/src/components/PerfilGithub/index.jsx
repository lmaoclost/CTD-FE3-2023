import { useEffect } from "react"

export function PerfilGithub() {
  useEffect(() => {
    console.log('Entrou na tela')

    return () => {
      console.log('Saiu de tela')
    }
  }, [])

  return (
    <>
      <h1>Olá :)</h1>
    </>
  )
}