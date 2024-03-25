import { useQuery } from '@tanstack/react-query'
import { charsWithFilms /*, getChars*/ } from '../apis/filmsApi.ts'
import { Link } from 'react-router-dom'
import DeleteChar from './components/DeleteChar.tsx'

export default function RandomChars() {
  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['characters'], queryFn: charsWithFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (characters) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random CHARACTER</h2>
      </div>
    )
  }
}
