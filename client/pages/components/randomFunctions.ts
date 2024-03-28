// import { CategoryWithFilm, Film } from '../../../models/ghibli'

// - - - - RANDOM CATEGORY ITEM FNs - - - -

// // used just to get random number - inclusive of max and min
// export function randomInt(min: number, max: number): number {
//   const random = Math.floor(Math.random() * max + min)
//   // console.log(`random Int: ${random}`)
//   return random
// }

// function to get a random ID
// // params: array(to get length and use it as max)
// export function getRandomId(array: CategoryWithFilm[]) {
//   const min = 1
//   const max = array.length
//   // must minus one as the index positions are one lower than corresponding id value
//   const randomId = randomInt(min, max) - 1
//   return randomId
// }

// // function using the randomID to get the item
// export function getRandomItem(array: CategoryWithFilm[]) {
//   const randomId = getRandomId(array)
//   const currentDish = array[randomId]
//   // console.log(currentDish)
//   return currentDish
// }

// // - - - - RANDOM FILM FNs - - - -

// export function randomIndex(min: number, max: number | undefined) {
//   if (!max) return null
//   const randomInteger = randomInt(min, max)
//   return randomInteger - 1
// }

// export function randomFilmFn(films: Film[] | undefined, i: number | null) {
//   if (!films) return null
//   if (!i) return null
//   const randomFilmGenerated = films[i]
//   return randomFilmGenerated
// }
