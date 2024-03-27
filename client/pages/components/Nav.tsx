import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav>
        <Link to={'films'}>Films</Link>
        <br />
        <Link to={'dishes'}>Dishes</Link>
        <br />
        <Link to={'game'}>Game</Link>
        <br />
        <Link to={'characters'}>Characters</Link>
        <br />
        <Link to={'character/add'}>Add Your Favourite Character</Link>
        <br />
      </nav>
      <footer></footer>
    </>
  )
}
