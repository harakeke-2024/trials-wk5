import { useQuery } from '@tanstack/react-query'
import { getFilms } from '../apis/filmsApi.ts'

export default function Films() {
  const {
    data: films,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: getFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (films) {
    return (
      <>
        <ul>
          {films.map((film, index) => (
            <li key={index}>
              <h2>{film.title}</h2>
              <img
                src={film.banner_url}
                alt={`film banner for ${film.title}`}
              />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
