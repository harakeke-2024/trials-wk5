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
