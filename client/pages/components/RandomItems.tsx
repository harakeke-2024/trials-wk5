import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useCategoryItems from '../../hooks/useCategoryItems'
import { CategoryWithFilm } from '../../../models/ghibli'
// import RandomChars from './components/RandomChars'

export default function RandomItems() {
  const [category, setCategory] = useState('')
  // dishes instead of cat - boolean
  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState<CategoryWithFilm[]>([])

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

  function handleGetCategoryItem(
    dishesArr: CategoryWithFilm[],
    charsArr: CategoryWithFilm[],
  ) {
    switch (category) {
      case 'characters':
        setItems(charsArr)
        console.log('characters!!!')
        break
      default:
        setItems(dishesArr)
        // getNewDishes()
        console.log('actually dishes!')
    }
    // invalidate query key if we have used the current items in the items state variable
    if (counter % 2) {
      getNewItems()
      console.log('query invalidated')
    }

    selectCategory()
  }

  function getNewItems() {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  function startGame(
    dishesArr: CategoryWithFilm[],
    charsArr: CategoryWithFilm[],
  ): void {
    handleGetCategoryItem(dishesArr, charsArr)
  }

  console.log(items)

  if (data) {
    const { dishes, chars } = data

    return (
      <div>
        <p>-----------------</p>
        <h2>Random ITEM Component</h2>

        {items.length > 0 ? (
          <div>
            <img src={items[0].img} alt="guess-the-film" />
            <p>Film 1: {items[0].film}</p>
            <p>Item 1: {items[0].name}</p>
            {items.length > 1 && (
              <>
                <p>Film 2: {items[1].film}</p>
                <p>Item 2: {items[1].name}</p>
              </>
            )}
            <button onClick={() => handleGetCategoryItem(dishes, chars)}>
              get random item
            </button>
          </div>
        ) : (
          <button onClick={() => startGame(dishes, chars)}>Start Game</button>
        )}
        {/* <img src={items[0].img} alt="guess-the-film" />

        <p>film 1: {items[0].film}</p>
        <p>item 1: {items[0].name}</p>

        <p>film 2: {items[1].film}</p>
        <p>item 2: {items[1].name}</p> */}
      </div>
    )
  }
}

// {
/* <h3>Dishes</h3>
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
        <p>character 2: {chars[1].name}</p> */
// }
