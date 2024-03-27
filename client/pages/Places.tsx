import useGetPlaces from '../hooks/useGetPlaces.ts'

export default function Places() {
  const { data: places, isLoading, isError, error } = useGetPlaces()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  console.log(places)

  if (places) {
    return (
      <>
        <ul>
          {places.map((place) => (
            <li key={place.name}>
              <h2>{place.name}</h2>
              <img src={place.image_url} alt={place.name} />
              <p>{place.description}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
