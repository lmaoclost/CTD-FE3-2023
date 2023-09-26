import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  })

  return (
    <>
      <h1>404 Página inválida</h1>
      <span>Você será redirecionado em 3 segundos</span>
    </>
  )
}