import { useQuery } from '@tanstack/react-query'
import { dishesWithFilms } from '../../apis/filmsApi'
import { useState } from 'react'
import RandomDisplay from './RandomDisplay'
import { CategoryWithFilm } from '../../../models/ghibli'
import { getRandomItem } from './randomFunctions'

export default function RandomDish() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesWithFilms })

  // Record<string, never> was suggested by TS
  const [randomDish, setRandomDish] = useState<
    CategoryWithFilm | Record<string, never> | null | undefined
  >({})

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // random fn has been set up. Next, need to call it inside the return block to ensure it works. -DONE
  // - add logic for figuring out the max position of the array

  function handleGetCategoryItem() {
    if (!dishes || dishes.length === 0) {
      return null
    }
    const dish = getRandomItem(dishes)
    // console.log(`dish: ${dish.name}`)
    setRandomDish(dish)
  }

  if (dishes) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish Component</h2>
        <button onClick={handleGetCategoryItem}>get random Dish</button>
        <p>random dish: {randomDish?.name}</p>
        <p>-----------------</p>
        <RandomDisplay dish={randomDish} />
      </div>
    )
  }
}
