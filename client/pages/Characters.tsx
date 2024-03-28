import { useQuery } from '@tanstack/react-query'
import { charsWithFilms /*, getChars*/ } from '../apis/filmsApi.ts'
import { Link } from 'react-router-dom'
import useDeleteChar from '../hooks/useDeleteChar.ts'

export default function Characters() {
  const deleteChar = useDeleteChar()

  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['characters'], queryFn: charsWithFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  function handleDelete(id: number, name: string) {
    deleteChar.mutate({ id, name })
  }

  if (characters) {
    return (
      <>
        <h1>Ghibli Characters</h1>
        <br />
        <Link to={'/add-character'}>Add Your Favourite Character</Link>
        <br />
        <ul>
          {characters.reverse().map((char, index) => (
            <li key={index}>
              <h2>{char.name}</h2>
              <img src={char.img} alt={`${char.name}`} />
              <p>From: {char.film}</p>
              <p>Year of release: {char.year}</p>
              <Link to={`${char.id}/edit`}>
                <p>edit character</p>
              </Link>
              <button onClick={() => handleDelete(char.id, char.name)}>
                Delete Character
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
