export class Movie {
  id: number;
  title: string;
  overview: string;
  poster_url: string;
  banner_url: string;
  vote_average: number;
  release_date: string;
  homepage_url: string;
  genres: MovieGenre[];
}

export class MovieGenre {
  id: number;
  name: string;
}
