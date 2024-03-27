import db from './connection.ts'
import { CategoryWithFilm, Category } from '../../models/ghibli.ts'

export async function getAllPlaces(): Promise<Category[]> {
  return await db('places').select()
}
