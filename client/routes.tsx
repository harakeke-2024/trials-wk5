import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Films from './components/Films.tsx'
import Home from './components/Home.tsx'
import Dishes from './components/Dishes.tsx'
import Characters from './components/Characters.tsx'
import AddCharacter from './components/AddCharacter.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="films" element={<Films />} />
    <Route path="dishes" element={<Dishes />} />
    <Route path="characters" element={<Characters />} />
    <Route path="add-character" element={<AddCharacter />} />
  </Route>,
)
