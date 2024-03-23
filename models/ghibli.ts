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
