import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import { Films } from './components/Films.tsx'
import Home from './components/Home.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="films" element={<Films />} />
  </Route>,
)
