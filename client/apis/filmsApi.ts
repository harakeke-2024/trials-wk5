import request from 'superagent'
import { Film, Dish, Character } from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function getFilms(): Promise<Film[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/films')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getDishes(): Promise<Dish[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/dishes')
    return res.body
  } catch (e) {
    console.error(e)
  }
}

export async function getChars(): Promise<Character[] | undefined> {
  try {
    const res = await request.get(rootUrl + '/characters')
    return res.body
  } catch (e) {
    console.error(e)
  }
}
