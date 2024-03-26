import { useQuery } from '@tanstack/react-query'
import { dishesDiffFilms } from '../apis/filmsApi'

export default function useRandomDishes() {
  return useQuery({ queryKey: ['random'], queryFn: dishesDiffFilms })
}
