import { useParams } from 'react-router-dom';

export function Repository() {
  const { repositoryOwner, repositoryName } = useParams();
  return (
    <h1>{repositoryName} {repositoryOwner}</h1>
  )
}