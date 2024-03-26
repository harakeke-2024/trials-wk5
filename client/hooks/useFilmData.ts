import { useQuery } from '@tanstack/react-query'
import { getFilms } from '../apis/filmsApi.ts'

export default function useFilmData() {
  return useQuery({ queryKey: ['films'], queryFn: getFilms })
}
