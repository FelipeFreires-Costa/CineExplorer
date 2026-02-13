import './App.css'
import { MovieCard } from './components/MovieCard'
import { useMovies } from './hooks/useMovies'

function App() {

      const { movies, loading, error} = useMovies()

    if(loading) return <p>Carregando filmes...</p>
    if(error) return <p style={{color: 'red'}}>{error}</p>
  console.log(movies)
  return (
    <div>
      <h1>CineExplorer</h1>
      <div className='movie-grid'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
