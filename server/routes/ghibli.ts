import { Router } from 'express'

import * as db from '../db/ghibli.ts'
import * as dbb from '../db/ghibli-dishes-fns.ts'

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

router.get('/films/:id', async (req, res) => {
  try {
    const filmId = Number(req.params.id)
    const film = await db.getFilmById(filmId)

    res.json(film)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/films/diff-film/:id', async (req, res) => {
  try {
    const filmId = Number(req.params.id)
    const film = await db.getDiffFilm(filmId)

    res.json(film)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// dishes
router.get('/dishes', async (req, res) => {
  try {
    const dishes = await dbb.getAllDishes()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/dishes/with-films', async (req, res) => {
  try {
    const dishes = await dbb.getDishesWithFilms()

    res.json(dishes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
