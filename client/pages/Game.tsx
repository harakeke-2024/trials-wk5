import { useState } from 'react'
import RandomItems from './components/RandomItems'

export default function Game() {
  const [showItems, setShowItems] = useState(false)

  return (
    <div>
      <button onClick={() => setShowItems(true)}>Show Random Items</button>
      {showItems && <RandomItems />}
    </div>
  )
}
