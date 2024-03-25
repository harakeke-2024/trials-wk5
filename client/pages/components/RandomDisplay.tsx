import { CategoryWithFilm } from '../../../models/ghibli'
import GetFilms from './GetFilms'

interface Props {
  dish: CategoryWithFilm | Record<string, never> | null | undefined
}

export default function RandomDisplay({ dish }: Props) {
  if (dish) {
    return (
      <>
        <p>-----------------------------------------------------------</p>
        <p>RANDOM DISH DISPLAY COMPONENT</p>
        <h1>{dish.name}</h1>
        {/* <p>{dish.film}</p> */}
        <img src={dish.img} alt={dish.name} />
        <p>POSSIBLE FILM ANSWERS COMPONENT</p>
        <GetFilms film={dish.film} />
      </>
    )
  }
}
