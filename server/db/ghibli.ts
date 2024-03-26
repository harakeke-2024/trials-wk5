import db from './connection.ts'
import { Character, Dish, Film, CharacterData } from '../../models/ghibli.ts'

// film fns

export async function getAllFilms(): Promise<Film[]> {
  return await db('films').select()
}

export async function getFilmById(id: number): Promise<Film[]> {
  return await db('films').select().where('id', id).first()
}

// dishes fns

export async function getAllDishes(): Promise<Dish[]> {
  return await db('dishes').select()
}

// character fns

export async function getAllChars(): Promise<Character[]> {
  return await db('characters').select()
}

export async function addChar(newChar: CharacterData) {
  return await db('characters').insert(newChar)
}

export async function updateChar(id: number, updatedChar: CharacterData) {
  return await db('characters').where('id', id).update(updatedChar)
}

export async function deleteChar(id: number) {
  return await db('characters').where('id', id).del()
}

export async function getCharsWithFilms(): Promise<Character[]> {
  return await db('characters')
    .join('films', 'films.id', 'film_id')
    .select(
      'characters.id as id',
      'characters.name as name',
      'characters.description as description',
      'characters.image_url as img',
      'films.title as film',
      'films.original_title as originalTitle',
      'films.id as filmId',
      'films.release_year as year',
    )
}
