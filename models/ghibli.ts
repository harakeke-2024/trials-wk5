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

export interface Character {
  id: number
  film_id: number
  name: string
  image_url: string
}

export interface CharacterData {
  film_id: number
  name: string
  image_url: string
}

export interface CharacterWithFilm {
  id: number
  film: string
  name: string
  img: string
  originalTitle: string
  filmId: number
  year: string
}
