import { useState } from 'react'
import RandomDish from './components/RandomDish'
import RandomChars from './components/RandomChars'

function Home() {
  const [category, setCategory] = useState('')
  const [counter, setCounter] = useState(0)

  function selectCategory() {
    if (counter % 2 === 0) {
      setCategory('dishes')
    } else if (counter % 2 === 1) {
      setCategory('characters')
    }
    setCounter((prevCounter) => prevCounter + 1)
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
