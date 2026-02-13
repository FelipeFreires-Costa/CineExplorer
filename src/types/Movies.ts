export interface Movie{
  id: number;
  title: string;
  overview:string;
  poster_path:string;
  vote_average:number;
  release_date: string;
  backdrop_path: string;
  vote_count: number;
  adult: boolean;
}

export interface MovieResponse{
  results:Movie[];
  page:number;
}