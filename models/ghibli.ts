export interface Film {
  id: number
  title: string
  release_year: string
  banner_url: string
  director: string
  original_title: string
  description: string
}

export interface Dish {
  id: number
  film_id: number
  name: string
  image_url: string
  original_name: string
  description: string
}

export interface CharacterData {
  film_id: number
  name: string
  image_url: string
}

export interface Character extends CharacterData {
  id: number
}

export interface DishWithFilm {
  id: number
  name: string
  description: string
  img: string
  film: string
  originalTitle: string
  filmId: number
  year: string
}

export interface CharWithFilm {
  id: number
  name: string
  description: string
  img: string
  film: string
  originalTitle: string
  filmId: number
  year: string
}
