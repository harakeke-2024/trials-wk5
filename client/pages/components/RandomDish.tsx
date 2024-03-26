import { useQueryClient } from '@tanstack/react-query'
import useRandomDishes from '../../hooks/useRandomDishes'
import { useState } from 'react'
// import RandomChars from './components/RandomChars'

export default function RandomDish() {
  const [category, setCategory] = useState('')
  // dishes instead of cat - boolean
  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState([])

  function selectCategory() {
    if (counter % 2 === 0) {
      setCategory('dishes')
    } else if (counter % 2 === 1) {
      setCategory('characters')
    }
    setCounter((prevCounter) => prevCounter + 1)
  }

  const queryClient = useQueryClient()
  const { data: dishes, isError, isLoading, error } = useRandomDishes()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  // want to use the select category to determine whether the item displayed is a character or dish.
  // could p

  // function handleGetCategoryItem() {
  //   selectCategory()
  //   getNewDishes()
  // }

  function handleGetCategoryItem() {
    selectCategory()
    // getNewDishes()
    switch (category) {
      case 'characters':
        setItems(dishes)
        console.log('characters!!!')
        break
      default:
        getNewDishes()
        console.log('actually dishes!')
    }
  }

  function getNewDishes() {
    queryClient.invalidateQueries({ queryKey: ['random'] })
  }

  if (dishes) {
    return (
      <div>
        <p>-----------------</p>
        <h2>Random Dish Component</h2>
        <button onClick={handleGetCategoryItem}>get random Dish</button>
        <img src={dishes[0].img} alt="guess-the-film" />
        <p>film 1: {dishes[0].film}</p>
        {/* <p>dish 1: {dishes[0].name}</p> */}

        <p>film 2: {dishes[1].film}</p>
        {/* <p>dish 2: {dishes[1].name}</p> */}
      </div>
    )
  }
}
