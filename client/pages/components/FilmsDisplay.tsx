import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Film } from '../../../models/ghibli'
import { getFilms } from '../../apis/filmsApi'

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

  if (films) {
    return (
      <>
        <p>film prop (correct film): {film}</p>
        <p>random (incorrect film - hardcoded for now): {films[0].title}</p>
      </>
    )
  }
}
