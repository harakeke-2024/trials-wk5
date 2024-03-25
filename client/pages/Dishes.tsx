import { useQuery } from '@tanstack/react-query'
import { dishesWithFilms, getDishes } from '../apis/filmsApi.ts'

export default function Dishes() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: dishesWithFilms })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (dishes) {
    return (
      <>
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              <h2>{dish.name}</h2>
              <img src={dish.img} alt={`${dish.name} dish`} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
