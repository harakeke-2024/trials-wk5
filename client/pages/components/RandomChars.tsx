import { useQuery } from '@tanstack/react-query'
import { charsWithFilms } from '../../apis/filmsApi.ts'

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
