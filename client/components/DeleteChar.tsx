import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCharacter, getDishes } from '../apis/filmsApi.ts'

export default function DeleteChar({ id }) {
  // here we will make a delete button and handle that functionality here.
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
