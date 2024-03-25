import { useQuery } from '@tanstack/react-query'
import { dishesWithFilms } from '../../apis/filmsApi'
import { useState } from 'react'
import RandomDisplay from './RandomDisplay'
import { DishWithFilm } from '../../../models/ghibli'
import { randomInt } from './randomFunctions'

export default function RandomDish() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesWithFilms })

  // const [min, setMin] = useState(1)
  const [max, setMax] = useState(0)
  // const max = 8
  const min = 1

  // Record<string, never> was suggested by TS
  const [randomDish, setRandomDish] = useState<
    DishWithFilm | Record<string, never> | null
  >({})

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  function getRandomId() {
    if (!dishes || dishes.length === 0) {
      return null
    }
    const length = dishes.length
    setMax(length)
    // console.log(max)
    const randomId = randomInt(min, max) - 1
    return randomId
  }

  // random fn has been set up. Next, need to call it inside the return block to ensure it works. -DONE
  // - add logic for figuring out the max position of the array

  function getRandomDish() {
    // check dishes is truthy and an array with length > 0
    if (!dishes || dishes.length === 0) {
      return null
    }

    const randomId = getRandomId()
    if (!randomInt) {
      return null
    } else if (randomId) {
      const currentDish = dishes[randomId]
      console.log(currentDish)
      return currentDish
    }
  }

  function handleGetDish() {
    const dish = getRandomDish()
    if (!dish) return null

    setRandomDish(dish)
  }

  if (dishes) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish</h2>
        <button onClick={handleGetDish}>get random Dish</button>
        <p>random dish: {randomDish?.name}</p>
        <p>-----------------</p>
        <RandomDisplay dish={randomDish} />
      </div>
    )
  }
}
