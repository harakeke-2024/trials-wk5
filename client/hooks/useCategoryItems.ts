import { useQuery } from '@tanstack/react-query'
import { categoriesDiffFilms } from '../apis/randomApi'

export default function useCategoryItems() {
  return useQuery({ queryKey: ['categories'], queryFn: categoriesDiffFilms })
}
