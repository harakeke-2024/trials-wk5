import { useQuery } from '@tanstack/react-query'
import { dishesWithFilms } from '../../apis/filmsApi'
import { useState } from 'react'
import RandomDisplay from './RandomDisplay'
import { CategoryWithFilm, Film } from '../../../models/ghibli'
import { getRandomItem } from './randomFunctions'
// import GetFilm from './GetFilm'

export default function RandomDish() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesWithFilms })

  const [randomFilm, setRandomFilm] = useState<
    Film | Record<string, never> | null | undefined
  >({})

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

  if (dishes && randomDish) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish Component</h2>
        <button onClick={handleGetCategoryItem}>get random Dish</button>
        <p>random dish: {randomDish.name}</p>
        <p>-----------------</p>
        <p>{randomFilm?.title}</p>
        {/* <GetFilm id={randomDish.filmId} setFilm={setRandomFilm} /> */}
        <RandomDisplay dish={randomDish} />
      </div>
    )
  }
}
