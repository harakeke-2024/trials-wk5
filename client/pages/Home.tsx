import { useState } from 'react'
import RandomDish from './components/RandomDish'
import RandomChars from './components/RandomChars'

function Home() {
  const [category, setCategory] = useState('')

  const min = 1
  const max = 2

  function getRandomInt() {
    const random = Math.floor(Math.random() * max + min)
    return random
  }

  function selectCategory() {
    const num = getRandomInt()
    if (num === 1) setCategory('dishes')
    if (num === 2) setCategory('characters')
  }

  return (
    <>
      <div>
        <h1>Ghibli Home!</h1>
        <button onClick={selectCategory}>Next</button>
        {category === 'dishes' && <RandomDish />}
        {category === 'characters' && <RandomChars />}
      </div>
    </>
  )
}

export default Home
