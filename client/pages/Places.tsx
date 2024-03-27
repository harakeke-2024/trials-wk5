import useGetPlaces from '../hooks/useGetPlaces.ts'

export default function Places() {
  const { data: places, isLoading, isError, error } = useGetPlaces()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  console.log(places)

  if (places) {
    return <>Placesssss</>
  }
}
