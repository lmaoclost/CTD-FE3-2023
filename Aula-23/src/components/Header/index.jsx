import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import styles from './header.module.css';

export function Header() {
  const { token, logaUsuario, deslogaUsuario } = useAuth();

  const alternaLogin = () => {
    if (token) {
      deslogaUsuario();
    }
    else {
      logaUsuario();
    }
  }


  return (
    <header className={styles.header}>
      <Link to="/"><h1>GitHubble</h1></Link>
      <nav>
        <ul>
          <li><button onClick={() => alternaLogin()}>{token ? 'Logout' : 'Login'}</button></li>
        </ul>
      </nav>
    </header>
  )
}