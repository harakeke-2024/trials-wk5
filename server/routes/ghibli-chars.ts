import { Router } from 'express'

import * as db from '../db/ghibli.ts'

const router = Router()

// '/api/v1/ghibli/characters'

router.get('/', async (req, res) => {
  try {
    const dishes = await db.getAllChars()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/with-films', async (req, res) => {
  try {
    const dishes = await db.getCharsWithFilms()

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

router.patch('/update/:id', async (req, res) => {
  try {
    // const { name, film_id, image_url } = req.body
    const newChar = req.body
    const id = Number(req.params.id)
    const added = await db.updateChar(id, newChar)

    res.status(201).json(added)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deletedChar = await db.deleteChar(id)

    res.json(deletedChar)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
