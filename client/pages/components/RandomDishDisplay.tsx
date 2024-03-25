import { DishWithFilm } from '../../../models/ghibli'

interface Props {
  dish: DishWithFilm | Record<string, never> | null
}

export default function RandomDishDisplay({ dish }: Props) {
  if (dish) {
    return (
      <>
        <p>-----------------------------------------------------------</p>
        <p>RANDOM DISH DISPLAY COMPONENT</p>
        <h1>{dish.name}</h1>
        <p>{dish.film}</p>
        <img src={dish.img} alt={dish.name} />
      </>
    )
  }
}
