import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import Films from './pages/Films.tsx'
import Home from './pages/Home.tsx'
import Dishes from './pages/Dishes.tsx'
import Characters from './pages/Characters.tsx'
import AddCharacter from './pages/AddCharacter.tsx'
import EditCharacter from './pages/EditCharacter.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="films" element={<Films />} />
    <Route path="dishes" element={<Dishes />} />
    <Route path="characters" element={<Characters />} />
    <Route path="character/add" element={<AddCharacter />} />
    <Route path="characters/:id/edit" element={<EditCharacter />} />
  </Route>,
)
