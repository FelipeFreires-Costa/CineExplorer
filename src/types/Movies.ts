export interface Movie{
  id: number;
  title: string;
  overview:string;
  poster_path:string;
  vote_avarage:number;
  release_date: string;
}

export interface MovieResponse{
  results:Movie[];
  page:number;
}