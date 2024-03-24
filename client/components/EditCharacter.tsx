import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editChar } from '../apis/filmsApi.ts'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EditCharacter() {
  const params = useParams()
  const id = Number(params.id)

  const queryClient = useQueryClient()

  const [char, setChar] = useState({
    id: id,
    name: '',
    film_id: 0,
    image_url: '',
  })

  const mutation = useMutation({
    mutationFn: editChar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
      setChar({
        id: id,
        name: '',
        film_id: 0,
        image_url: '',
      })
    },
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(char)
    mutation.mutate(char)
  }

  return (
    <>
      <h2>Edit character below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="char-name">Name: </label>
        <input
          onChange={(e) => setChar({ ...char, name: e.target.value })}
          type="text"
          name="char-name"
          id="char-name"
          placeholder="Character Name"
        />
        <label htmlFor="char-film-id">Film: </label>
        <input
          onChange={(e) =>
            setChar({ ...char, film_id: Number(e.target.value) })
          }
          type="text"
          name="char-film-id"
          id="char-film-id"
          placeholder="As seen on"
        />
        <label htmlFor="char-img">Image Link: </label>
        <input
          onChange={(e) => setChar({ ...char, image_url: e.target.value })}
          type="text"
          name="char-img"
          id="char-img"
          placeholder="Character Image Link"
        />
        <button type="submit">Update Character</button>
      </form>
    </>
  )
}
