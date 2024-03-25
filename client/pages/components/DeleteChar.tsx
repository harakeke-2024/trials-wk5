import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCharacter, getDishes } from '../../apis/filmsApi.ts'

interface Props {
  id: number
}

export default function DeleteChar({ id }: Props) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => deleteCharacter(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
    },
  })

  function handleDelete() {
    mutation.mutate()
  }

  if (id) {
    return (
      <>
        <h2>Delete character with ID: {id}</h2>
        <button onClick={handleDelete}>Delete Character</button>
      </>
    )
  }
}
