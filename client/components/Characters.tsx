import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { getChars } from '../apis/filmsApi.ts'

export default function Characters() {
  const {
    data: characters,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: getChars })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (characters) {
    return (
      <>
        <ul>
          {characters.map((char, index) => (
            <li key={index}>
              <h2>{char.name}</h2>
              <img src={char.image_url} alt={`${char.name}`} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
