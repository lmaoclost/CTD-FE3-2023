import { Link } from 'react-router-dom';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><h1>GitHubble</h1></Link>
      <nav>
        <ul>
          <li><Link to="/lmaoclost/Aulas_CTD">Link para um repositório existente</Link></li>
        </ul>
      </nav>
    </header>
  )
}