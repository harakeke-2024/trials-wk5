import db from './connection.ts'
import { Dish } from '../../models/ghibli.ts'

export async function getAllDishes(): Promise<Dish[]> {
  return await db('dishes').select()
}

export async function getDishesWithFilms() {
  return await db('dishes')
    .join('films', 'films.id', 'dishes.film_id')
    .select(
      'dishes.id as id',
      'dishes.name as name',
      'dishes.description as description',
      'dishes.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
}

export async function getTwoDishes() {
  // return await db('dishes')
  //   .select()
  //   .from('films')
  //   .join('films', 'films.id', '=', 'dishes.film_id')
  //   .orderByRaw('RANDOM()')
  //   .limit(2)

  // Fetch first random dish
  const randomDishId = await db('dishes')
    .select('id', 'film_id')
    .orderByRaw('RANDOM()')
    .first()

  // Fetch another random dish ID that is different from the first one
  const differentRandomDish = await db('dishes')
    .select('id', 'film_id')
    .whereNot('film_id', randomDishId.film_id) // Exclude the first random dish ID
    .orderByRaw('RANDOM()')
    .first()

  // Fetch details of the two random dishes
  const result = await db('dishes')
    .whereIn('dishes.id', [randomDishId.id, differentRandomDish.id])
    .join('films', 'films.id', 'dishes.film_id')
    .select(
      'dishes.id as id',
      'dishes.name as name',
      'dishes.description as description',
      'dishes.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
  return result
}
