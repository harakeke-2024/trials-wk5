import { useQuery } from '@tanstack/react-query'
import { differentFilm } from '../../apis/filmsApi'

interface Props {
  film: string
  id: number
}

export default function FilmsDisplay({ film, id }: Props) {
  const {
    data: randomFilm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['random-film', id],
    queryFn: () => differentFilm(id),
  })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  console.log('random film below')
  console.log(randomFilm)
  console.log('--------------------end------------------------')
  if (randomFilm) {
    return (
      <>
        <p>answer: {film}</p>
        <p>random: {randomFilm.title}</p>
      </>
    )
  }
}
