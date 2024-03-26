import { useQuery } from '@tanstack/react-query'
import { CategoryWithFilm } from '../../../models/ghibli'
import FilmsDisplay from './FilmsDisplay'
import { differentFilm } from '../../apis/filmsApi'
// import GetFilms from './GetFilms'

interface Props {
  dish: CategoryWithFilm
}

export default function RandomDisplay({ dish }: Props) {
  console.log('answer below')
  console.log(dish)
  const id = dish?.filmId

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

  if (dish && randomFilm) {
    return (
      <>
        <p>-----------------------------------------------------------</p>
        <p>RANDOM DISH DISPLAY COMPONENT</p>
        <h1>{dish.name}</h1>
        {/* <p>{dish.film}</p> */}
        <img src={dish.img} alt={dish.name} />
        <p>POSSIBLE FILM ANSWERS COMPONENT</p>
        <p>answer: {dish.film}</p>
        <p>random film: {randomFilm.title}</p>

        {/* <FilmsDisplay film={dish.film} id={dish.filmId} /> */}
        {/* <FilmsDisplay film={dish.film} /> */}

        {/* <GetFilms film={dish.film} /> */}
      </>
    )
  }
}
