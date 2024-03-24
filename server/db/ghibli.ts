import db from './connection.ts'
import { Character, Dish, Film } from '../../models/ghibli.ts'

export async function getAllFilms(): Promise<Film[]> {
  return await db('films').select()
}

export async function getAllDishes(): Promise<Dish[]> {
  return await db('dishes').select()
}

export async function getAllChars(): Promise<Character[]> {
  return await db('characters').select()
}
