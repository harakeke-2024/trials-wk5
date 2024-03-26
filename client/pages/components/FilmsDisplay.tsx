import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
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
  // const randomId = randomInt(min, max)

  const initialState = randomInt(min, max)
  const [randomId, setRandomId] = useState(initialState)

  const {
    data: randomFilm,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['film', randomId, film],
    queryFn: () => getFilm(randomId),
  })

  // const [randomFilm, setRandomFilm] = useState(randomFilm)

  function fetchNewFilm() {
    const newId = randomInt(min, max)
    setRandomId(newId)
  }

  useEffect(() => {
    refetch()
  }, [randomId, refetch, film])

  if (isLoading) return <h1>Loading randomId...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // const randomI = randomIndex(min, max)
  // const randomFilmmmm = randomFilmFn(films, randomI)

  if (randomFilm && randomFilm.title !== film) {
    return (
      <>
        <p>film prop (correct film): {film}</p>
        {/* <p>first film in array: {randomFilm.title}</p> */}
        <p>random ID from fn (1-8): {randomId}</p>
        <p>random ID from query call (1-8): {randomFilm.id}</p>
        <p>random film using index position: {randomFilm.title}</p>
      </>
    )
  } else {
    fetchNewFilm()
    return <h1>Fetching new random film...</h1>
  }
}
