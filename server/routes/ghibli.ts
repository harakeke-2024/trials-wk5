import { Router } from 'express'

import * as db from '../db/ghibli.ts'

const router = Router()

router.get('/films', async (req, res) => {
  try {
    const films = await db.getAllFilms()

    res.json(films)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/dishes', async (req, res) => {
  try {
    const dishes = await db.getAllDishes()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/characters', async (req, res) => {
  try {
    const dishes = await db.getAllChars()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/new-character', async (req, res) => {
  try {
    // const { name, film_id, image_url } = req.body
    const newChar = req.body
    const added = await db.addChar(newChar)

    res.status(201).json(added)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
