import { useQuery } from '@tanstack/react-query'
import { differentFilm } from '../../apis/filmsApi'
import { Dispatch, SetStateAction } from 'react'
import { Film } from '../../../models/ghibli'

interface Props {
  id: number
  setFilm: Dispatch<
    SetStateAction<Record<string, never> | Film | null | undefined>
  >
}

export default function GetFilm({ id, setFilm }: Props) {
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

  if (randomFilm) {
    setFilm(randomFilm)
    return (
      <p style={{ color: 'blue' }}>
        {' '}
        random film, setting state to...: {randomFilm.title}
      </p>
    )
  }
}
