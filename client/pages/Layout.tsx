import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function Layout() {
  return (
    <>
      <header>
        <h1>All the Ghibli Things!</h1>
      </header>
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
