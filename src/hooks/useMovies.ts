import { useState, useEffect } from 'react'
import api from '../services/api'
import type { Movie, MovieResponse } from '../types/Movies'

export function useMovies(){
  //estatos para controlar o ciclo de vida da requisiçao
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMovies(){
      try {
        setLoading(true); //começa a carregar
        const response = await api.get<MovieResponse>('/movie/popular')
        setMovies(response.data.results)//guarda os filmes
      } catch (err){
        setError("erro ao buscar filmes. Tente novamente.")
        console.error(err)
      } finally {
        setLoading(false)//termina de carregar (independente se deu certo ou nao)
      }
    }
    fetchMovies()
  }, []) //array vazio = roda apenas uma vez quando o componente montar

  //returna tudo que o componente precisa
  return {movies , loading, error}
}

