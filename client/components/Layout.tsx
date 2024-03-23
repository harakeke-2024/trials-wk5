import { Outlet } from 'react-router-dom'
import { Films } from './Films'

export default function Layout() {
  return (
    <>
      <header>{/* <h1>Fullstack Boilerplate - with Fruits!</h1> */}</header>
      <main>
        <h1>Films:</h1>
        <Films />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
