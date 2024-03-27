import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCategoryItems from '../../hooks/useCategoryItems'
// import RandomChars from './components/RandomChars'

export default function RandomItems() {
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
  const { data, isError, isLoading, error } = useCategoryItems()

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
        // setItems(dishes)
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

  console.log(data)

  if (data) {
    const { dishes, chars } = data
    return (
      <div>
        <p>-----------------</p>
        <h2>Random ITEM Component</h2>
        {/* <button onClick={handleGetCategoryItem}>get random Dish</button> */}
        <h3>Dishes</h3>
        <img src={dishes[0].img} alt="guess-the-film" />

        <p>film 1: {dishes[0].film}</p>
        <p>dish 1: {dishes[0].name}</p>

        <p>film 2: {dishes[1].film}</p>
        <p>dish 2: {dishes[1].name}</p>

        <h3>Chars</h3>
        <img src={chars[0].img} alt="guess-the-film" />

        <p>film 1: {chars[0].film}</p>
        <p>character 1: {chars[0].name}</p>

        <p>film 2: {chars[1].film}</p>
        <p>character 2: {chars[1].name}</p>
      </div>
    )
  }
}
