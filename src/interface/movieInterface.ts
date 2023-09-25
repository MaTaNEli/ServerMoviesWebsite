
export interface genres_obj {
  "id": number,
  "name": string,
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<Number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title:string;
  video: false;
  vote_average: number;
  vote_count: number;
  Popular: boolean;
  NowPlaying: boolean;
  TopRated: boolean;
  UpComing: boolean;
}
