import { Link } from 'react-router-dom'

export function Header() {
  return (
    <nav>
      <Link to="/">Ir para a Home</Link><br />
      <Link to="/lmaoclost/Aulas_CTD">Link para um repositório existente</Link>
    </nav>
  )
}