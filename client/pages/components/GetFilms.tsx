import { useQuery } from '@tanstack/react-query'
import { getFilms } from '../../apis/filmsApi.ts'

interface Props {
  film: string
}

export default function GetFilms({ film }: Props) {
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
        <p>{film}</p>
      </>
    )
  }
}
