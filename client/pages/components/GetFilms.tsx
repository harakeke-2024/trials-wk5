import { useQuery } from '@tanstack/react-query'
import { getFilms } from '../../apis/filmsApi.ts'
import { randomInt } from './randomFunctions.ts'
import { Film } from '../../../models/ghibli.ts'
import { useState } from 'react'

interface Props {
  film: string
}

export default function GetFilms({ film }: Props) {
  const [random, setRandom] = useState({
    id: 1,
    title: "Howl's Moving Castle ",
    release_year: '2004',
    banner_url: 'https://www.ghibli.jp/images/howl.jpg',
    director: 'Hayao Miyazaki',
    original_title: 'ハウルの動く城',
    description:
      "Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.",
  })

  const {
    data: films,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['films'], queryFn: getFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  const min = 1
  const max = 5

  function getRandomFilm() {
    if (!films) return null
    const randomId = randomInt(min, max) - 1
    const randomFilm = films[randomId]
    return randomFilm
  }

  function renderRandomFilm() {
    const randomFilm = getRandomFilm()
    // want to compare random.title to film
    // if they match, want to continue calling getRandomFilm()
    while (randomFilm?.title === film) {
      getRandomFilm()

      if (randomFilm.title !== film) {
        console.log('condition met')

        setRandom(randomFilm)
        break
      }
    }
    // if they don't, want to break/stop set random to this randomFilm using setRandom

    // while (random?.title === film) {
    //   console.log('loop running')
    //   const randomFilm = getRandomFilm()
    //   if (!randomFilm) {
    //     console.log('random film not found')
    //     return null
    //   }

    //   setRandom(randomFilm)
    //   if (random?.title !== film) break
    // }
    // console.log(`random film rendered: ${random.title}`)
    return random
  }

  const wrongFilm = renderRandomFilm()

  if (films) {
    return (
      <>
        <p>{`wrong film: ${wrongFilm?.title}`}</p>
        <p>{`correct film: ${film}`}</p>
      </>
    )
  }
}
