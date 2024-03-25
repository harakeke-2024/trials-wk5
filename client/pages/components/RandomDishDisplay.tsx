import { DishWithFilm } from '../../../models/ghibli'

interface Props {
  dish: DishWithFilm | Record<string, never> | null
}

export default function RandomDishDisplay({ dish }: Props) {
  console.log(dish)
  if (dish) {
    return (
      <>
        <p>hello</p>
        <p>{dish.name}</p>
        <p>{dish.film}</p>
      </>
    )
  }
}
