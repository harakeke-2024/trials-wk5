import { Router } from 'express'

import * as db from '../db/ghibli.ts'

const router = Router()

// films
router.get('/films', async (req, res) => {
  try {
    const films = await db.getAllFilms()

    res.json(films)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// dishes
router.get('/dishes', async (req, res) => {
  try {
    const dishes = await db.getAllDishes()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
