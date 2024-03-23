import { Outlet } from 'react-router-dom'
import { Films } from './Films'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <header>{/* <h1>Fullstack Boilerplate - with Fruits!</h1> */}</header>
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
