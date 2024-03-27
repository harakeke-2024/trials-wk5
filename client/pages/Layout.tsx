import { Link, Outlet } from 'react-router-dom'
import Nav from './components/Nav'

export default function Layout() {
  return (
    <>
      <header className="head-container">
        <h1>All the Ghibli Things!</h1>
        <Link to="/">
          {/* eslint-disable-next-line jsx-a11y/alt-text*/}
          <img src="https://www.ghibli-museum.jp/en/img/mainimg.png" alt="" />
        </Link>
      </header>
      <main>
        <Nav />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
