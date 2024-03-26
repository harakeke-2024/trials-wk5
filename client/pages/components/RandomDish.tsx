import { useQuery } from '@tanstack/react-query'
import { dishesDiffFilms } from '../../apis/filmsApi'
import { useState } from 'react'
// import RandomDisplay from './RandomDisplay'
import { CategoryWithFilm, Film } from '../../../models/ghibli'
import { getRandomItem } from './randomFunctions'

export default function RandomDish() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesDiffFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // random fn has been set up. Next, need to call it inside the return block to ensure it works. -DONE
  // - add logic for figuring out the max position of the array

  function handleGetCategoryItem() {}

  if (dishes) {
    console.log(dishes[0])
    console.log(dishes[1])
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish Component</h2>
        <button onClick={handleGetCategoryItem}>get random Dish</button>
        <p>film 1: {dishes[0].film}</p>
        <p>dish 1: {dishes[0].name}</p>

        <p>film 2: {dishes[1].film}</p>
        <p>dish 2: {dishes[1].name}</p>
      </div>
    )
  }
}
