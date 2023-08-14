import { Input } from './components/Input';
import styles from './UserForm.module.css';

export default function UserForm({ handleSubmit }) {
  return (
    <form className={styles.FormContainer} onSubmit={handleSubmit}>
      <h3>Adicione um usuário</h3>
      <Input type="text" name="name" id="name" placeholder="Digite o nome do usuário" />
      <Input type="text" name="userName" id="userName" placeholder="Digite o username" />
      <button type="submit">Adicionar</button>
    </form>
  )
}