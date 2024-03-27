import request from 'superagent'
import {
  Film,
  Dish,
  Character,
  CharacterData,
  CategoryWithFilm,
  Data,
} from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function categoriesDiffFilms(): Promise<Data | undefined> {
  try {
    const [dishesRes, charsRes] = await Promise.all([
      request.get(rootUrl + '/two-dishes'),
      request.get(rootUrl + '/characters/two-characters'),
    ])

    const res = { dishes: dishesRes.body, chars: charsRes.body }

    return res
  } catch (e) {
    console.error(e)
  }
}
