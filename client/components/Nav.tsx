import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header>{/* <h1>Fullstack Boilerplate - with Fruits!</h1> */}</header>
      <main>
        <Link to={'films'}>Films</Link>
        <br />
        <Link to={'dishes'}>Dishes</Link>
        <br />
        <Link to={'characters'}>Characters</Link>
      </main>
      <footer></footer>
    </>
  )
}
