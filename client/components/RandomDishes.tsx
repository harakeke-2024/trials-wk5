import { useQuery } from '@tanstack/react-query'
import { getDishes } from '../apis/filmsApi.ts'
import { useState } from 'react'

export default function RandomDishes() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: getDishes })

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(4)
  const [randomInt, setRandomInt] = useState(2)

  function getRandomInt() /*:<Number>*/ {
    const random = Math.floor(Math.random() * max + min)
    setRandomInt(random)
    return randomInt
  }

  // random fn has been set up. Next, need to call it inside the return block to ensure it works. -DONE
  // - add logic for figuring out the max position of the array

  function getRandomDish() {
    setRandomInt(getRandomInt())
    return randomInt
  }

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (dishes) {
    return (
      <div>
        <h2>Random Dish</h2>
        <p>under construction...</p>
        <button onClick={() => getRandomInt()}>get random int</button>
        <p>random int: {randomInt}</p>
      </div>
    )
  }
}
