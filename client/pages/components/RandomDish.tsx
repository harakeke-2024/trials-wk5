import { useQuery } from '@tanstack/react-query'
import { dishesWithFilms } from '../../apis/filmsApi'
import { useState } from 'react'
import RandomDishDisplay from './RandomDishDisplay'
import { DishWithFilm } from '../../../models/ghibli'

export default function RandomDish() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesWithFilms })

  // const [min, setMin] = useState(1)
  const [max, setMax] = useState(0)
  // const [randomInt, setRandomInt] = useState(2)
  // Record<string, never> was suggested by TS
  const [randomDish, setRandomDish] = useState<
    DishWithFilm | Record<string, never> | null
  >({})

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // const max = 8
  const min = 1

  function getRandomInt() /*:<Number>*/ {
    if (!dishes || dishes.length === 0) {
      return null
    }
    const length = dishes.length
    setMax(length)
    console.log(max)
    const random = Math.floor(Math.random() * max + min)
    return random
  }

  // random fn has been set up. Next, need to call it inside the return block to ensure it works. -DONE
  // - add logic for figuring out the max position of the array

  function getRandomDish() {
    // check dishes is truthy and an array with length > 0
    if (!dishes || dishes.length === 0) {
      return null
    }

    const randomInt = getRandomInt()
    const randomId = randomInt - 1

    const currentDish = dishes[randomId]
    // console.log(currentDish)
    return currentDish
  }

  function handleGetDish() {
    const dish = getRandomDish()
    setRandomDish(dish)
  }

  if (dishes) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish</h2>
        {/* <p>under construction...</p>
        <button onClick={() => getRandomInt()}>get random int</button>
        <p>random int: {randomInt}</p> */}

        <button onClick={handleGetDish}>get random Dish</button>
        <p>random dish: {randomDish?.name}</p>
        <p>-----------------</p>
        <RandomDishDisplay dish={randomDish} />
      </div>
    )
  }
}
