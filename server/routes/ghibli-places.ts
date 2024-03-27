import { Router } from 'express'

import * as db from '../db/ghibli-places-fns.ts'

const router = Router()

// '/api/v1/ghibli/places'

router.get('/', async (req, res) => {
  try {
    const places = await db.getAllPlaces()

    res.json(places)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/two-places', async (req, res) => {
  try {
    const places = await db.getTwoPlaces()

    res.json(places)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
