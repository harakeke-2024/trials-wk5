import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Film } from '../../../models/ghibli'
import { getFilms } from '../../apis/filmsApi'
import { randomInt } from './randomFunctions'

interface Props {
  film: string
}

export default function FilmsDisplay({ film }: Props) {
  const [randomFilm, setRandomFilm] = useState<
    Film | Record<string, never> | null | undefined
  >({})

  const {
    data: films,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: getFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  const min = 1
  const max = 8

  function randomIndex(min: number, max: number) {
    const randomInteger = randomInt(min, max)
    return randomInteger - 1
  }

  function randomFilmFn(i) {
    // const i = randomIndex(min, max)
    if (!films) return null
    const randomFilmGenerated = films[i]
    return randomFilmGenerated
  }

  const randomI = randomIndex(min, max)
  const randomFilmmmm = randomFilmFn(randomI)

  if (films) {
    return (
      <>
        <p>film prop (correct film): {film}</p>
        <p>random (incorrect film - hardcoded for now): {films[3].title}</p>
        <p>random index position (0-7): {randomI}</p>
        <p>random film index position: {randomFilmmmm?.id}</p>
        <p>random film using index position: {randomFilmmmm?.title}</p>
      </>
    )
  }
}
