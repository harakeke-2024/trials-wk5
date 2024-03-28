import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addNewChar } from '../../apis/filmsApi.ts'
import { useState } from 'react'
import useFilmData from '../../hooks/useFilmData.ts'
import { useNavigate } from 'react-router-dom'

export default function AddCharacter() {
  const queryClient = useQueryClient()
  const films = useFilmData()
  const navigate = useNavigate()

  const [char, setChar] = useState({
    name: '',
    film_id: 0,
    image_url: '',
  })

  const mutation = useMutation({
    mutationFn: addNewChar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
      setChar({
        name: '',
        film_id: 0,
        image_url: '',
      })
      navigate('/characters')
    },
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(char)
    mutation.mutate(char)
  }

  const handleFilmChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setChar((prevChar) => ({
      ...prevChar,
      film_id: Number(e.target.value),
    }))
  }

  if (films.isLoading) <p>Loading film data...</p>

  if (films.isError) <p>Failed to load film data</p>

  if (films.data)
    return (
      <>
        <h2>Add a new character below:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="char-name">Name: </label>
          <input
            required
            onChange={(e) => setChar({ ...char, name: e.target.value })}
            type="text"
            name="char-name"
            id="char-name"
            value={char.name}
            placeholder="Character Name"
          />

          <label htmlFor="film-id">Select Film: </label>
          <select
            id="film-id"
            name="film-id"
            onChange={handleFilmChange}
            value={char.film_id}
          >
            {films.data?.map((film) => (
              <option key={film.id} value={film.id}>
                {film.title}
              </option>
            ))}
          </select>

          <label htmlFor="char-img">Image Link: </label>
          <input
            required
            onChange={(e) => setChar({ ...char, image_url: e.target.value })}
            type="text"
            name="char-img"
            id="char-img"
            value={char.image_url}
            placeholder="Character Image Link"
          />
          <button type="submit">Add Character</button>
        </form>
      </>
    )
}
