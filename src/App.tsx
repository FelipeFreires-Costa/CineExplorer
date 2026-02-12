import './App.css'
import { useMovies } from './hooks/useMovies'

function App() {

      const { movies, loading, error} = useMovies()

    if(loading) return <p>Carregando filmes...</p>
    if(error) return <p style={{color: 'red'}}>{error}</p>

  return (
    <div>
      <h1>CineExplorer</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
