import { useQuery } from '@tanstack/react-query'
import { differentFilm } from '../../apis/filmsApi'

interface Props {
  film: string
  id: number
}

export default function FilmsDisplay({ film, id }: Props) {
  const {
    data: randomFilm,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['random-film', id],
    queryFn: () => differentFilm(id),
  })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  console.log('random film below')
  console.log(randomFilm)
  console.log('--------------------end------------------------')
  if (randomFilm) {
    return (
      <>
        <p>answer: {film}</p>
        <p>random: {randomFilm.title}</p>
      </>
    )
  }
}

// THE CODE BELOW ALSO RENDERS ONCE ONLY
// import { useQuery } from '@tanstack/react-query'
// import { differentFilm } from '../../apis/filmsApi'

// interface Props {
//   film: string
// }

// export default function FilmsDisplay({ film }: Props) {
//   const {
//     data: randomFilm,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ['random-film', 5],
//     queryFn: () => differentFilm(5),
//   })

//   if (isLoading) return <h1>Loading...</h1>

//   if (isError) return <h1>Error; {error.message}</h1>

//   console.log('random film below')
//   console.log(randomFilm)
//   console.log('--------------------end------------------------')
//   if (randomFilm) {
//     return (
//       <>
//         <p>answer: {film}</p>
//         <p>random (kiki hardcode): {randomFilm.title}</p>
//       </>
//     )
//   }
// }

// the code below only renders once...
// export default function FilmsDisplay() {
//   console.log('how many times do I render now?')

//   return (
//     <>
//       <p>Hello</p>
//     </>
//   )
// }
