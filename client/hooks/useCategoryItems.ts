import { useQuery } from '@tanstack/react-query'
import { categoriesDiffFilms } from '../apis/filmsApi'

export default function useCategoryItems() {
  return useQuery({ queryKey: ['categories'], queryFn: categoriesDiffFilms })
}
