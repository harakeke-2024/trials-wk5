import { useQuery } from '@tanstack/react-query'
import { getPlaces } from '../apis/filmsApi'

export default function useGetPlaces() {
  return useQuery({ queryKey: ['places'], queryFn: getPlaces })
}
