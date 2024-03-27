import db from './connection.ts'
import { CategoryWithFilm, Category } from '../../models/ghibli.ts'

export async function getAllPlaces(): Promise<Category[]> {
  return await db('places').select()
}

export async function getTwoPlaces(): Promise<CategoryWithFilm[]> {
  // Fetch first random place
  const randomPlaceId = await db('places')
    .select('id', 'film_id')
    .orderByRaw('RANDOM()')
    .first()

  // Fetch another random place ID that is different from the first one
  const differentRandomPlace = await db('places')
    .select('id', 'film_id')
    .whereNot('film_id', randomPlaceId.film_id) // Exclude the first random place ID
    .orderByRaw('RANDOM()')
    .first()

  // Fetch details of the two random places
  const result = await db('places')
    .whereIn('places.id', [randomPlaceId.id, differentRandomPlace.id])
    .join('films', 'films.id', 'places.film_id')
    .select(
      'places.id as id',
      'places.name as name',
      'places.description as description',
      'places.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
  return result
}
