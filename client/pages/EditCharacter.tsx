import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editChar } from '../apis/filmsApi.ts'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFilmData from '../hooks/useFilmData.ts'

export default function EditCharacter() {
  const params = useParams()
  const id = Number(params.id)
  const films = useFilmData()
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const [char, setChar] = useState({
    id: id,
    name: '',
    film_id: 1,
    image_url: '',
  })

  const mutation = useMutation({
    mutationFn: editChar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] })
      alert(`${char.name} has been edited`)
      setChar({
        id: id,
        name: '',
        film_id: 1,
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
          {/* <label htmlFor="char-film-id">Film: </label>
        <input
          onChange={(e) =>
            setChar({ ...char, film_id: Number(e.target.value) })
          }
          type="text"
          name="char-film-id"
          id="char-film-id"
          placeholder="As seen on"
        /> */}

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
