import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav>
        <Link to={'films'}>Films</Link>
        <br />
        <Link to={'dishes'}>Dishes</Link>
        <br />
        <Link to={'characters'}>Characters</Link>
        <br />
        <Link to={'places'}>Places</Link>
        <br />
        <Link to={'game'}>Game</Link>
      </nav>
    </>
  )
}
