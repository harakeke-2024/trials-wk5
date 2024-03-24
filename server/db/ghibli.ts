import db from './connection.ts'
import { Character, Dish, Film, CharacterData } from '../../models/ghibli.ts'

// film fns

export async function getAllFilms(): Promise<Film[]> {
  return await db('films').select()
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
  const { name, film_id, image_url } = newChar
  return await db('characters').insert(newChar)
}

export async function updateChar(id: number, updatedChar: CharacterData) {
  return await db('characters').where('id', id).update(updatedChar)
}
