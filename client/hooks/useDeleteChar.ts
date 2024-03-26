import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCharacter } from '../apis/filmsApi.ts'

interface Params {
  id: number
}
export default function useDeleteChar() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (value: Params) => deleteCharacter(value.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
    },
  })
}
