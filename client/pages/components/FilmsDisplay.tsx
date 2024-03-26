import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Film } from '../../../models/ghibli'
import { getFilm, getFilms } from '../../apis/filmsApi'
import { randomFilmFn, randomIndex, randomInt } from './randomFunctions'

interface Props {
  film: string
}

export default function FilmsDisplay({ film }: Props) {
  // const [randomFilm, setRandomFilm] = useState<
  //   Film | Record<string, never> | null | undefined
  // >({})

  const min = 1
  const max = 8

  const randomId = randomInt(min, max)

  const {
    data: randoFilm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['film', randomId],
    queryFn: () => getFilm(randomId),
  })

  if (isLoading) return <h1>Loading randomId...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // const randomI = randomIndex(min, max)
  // const randomFilmmmm = randomFilmFn(films, randomI)

  if (randoFilm) {
    return (
      <>
        <p>film prop (correct film): {film}</p>
        {/* <p>first film in array: {randoFilm.title}</p> */}
        <p>random ID from fn (1-8): {randomId}</p>
        <p>random ID from query call (1-8): {randoFilm.id}</p>
        <p>random film using index position: {randoFilm.title}</p>
      </>
    )
  }
}
