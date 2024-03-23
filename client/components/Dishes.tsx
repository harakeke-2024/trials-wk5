import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { getDishes } from '../apis/filmsApi.ts'

export default function Dishes() {
  const {
    data: films,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: getDishes })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (films) {
    return (
      <>
        <ul>
          {films.map((film, index) => (
            <li key={index}>
              <h2>{film.name}</h2>
              <img src={film.image_url} alt={`film banner for ${film.name}`} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
