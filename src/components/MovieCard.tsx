import { type Movie } from '../types/Movies'
import styles from './MovieCard.module.css';

interface Props{
  movie: Movie; //isso diz que este componente TEM QUE receber um objeto do tipo Movie
}

export function MovieCard({ movie } : Props){
  return(
    <div className={styles.card}>
<img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className={styles.poster}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.rating}>
          <span className={styles.star}>★</span>
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}