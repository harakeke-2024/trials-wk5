import request from 'superagent'
import { Data } from '../../models/ghibli'

const rootUrl = '/api/v1/ghibli'

export async function categoriesDiffFilms(): Promise<Data | undefined> {
  try {
    const [dishesRes, charsRes, placesRes] = await Promise.all([
      request.get(rootUrl + '/two-dishes'),
      request.get(rootUrl + '/characters/two-characters'),
      request.get(rootUrl + '/places/two-random'),
    ])

    const res = {
      dishes: dishesRes.body,
      chars: charsRes.body,
      places: placesRes.body,
    }

    return res
  } catch (e) {
    console.error(e)
  }
}
