import { useState } from 'react'
import RandomDish from './components/RandomDish'
import RandomChars from './components/RandomChars'

function Home() {
  const [category, setCategory] = useState('')
  const [toggle, setToggle] = useState(false)

  function selectCategory() {
    if (toggle === false) {
      setCategory('dishes')
      setToggle(true)
    }
    if (toggle === true) {
      setCategory('characters')
      setToggle(false)
    }
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
