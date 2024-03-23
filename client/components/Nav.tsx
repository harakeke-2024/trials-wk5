import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header>{/* <h1>Fullstack Boilerplate - with Fruits!</h1> */}</header>
      <main>
        <Link to={'films'}>Films</Link>
      </main>
      <footer></footer>
    </>
  )
}
