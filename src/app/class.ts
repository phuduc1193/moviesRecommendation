export class Genre {
  id: number;
  name: string;
}

export class Movie {
  id: number;
  title: string;
  overview: string;
  poster_url: string;
  banner_url: string;
  vote_average: number;
  release_date: string;
  homepage_url: string;
  runtime: number;
  genres: Genre;
}

export class TVShow {
  id: number;
  title: string;
  overview: string;
  poster_url: string;
  banner_url: string;
  vote_average: number;
  release_date: string;
  homepage_url: string;
  seasons: TVSeason;
  genres: any;
  status: string;
}

export class TVSeason {
  id: number;
  title: string;
  overview: string;
  poster_url: string;
  air_date: string;
  episodes: any;
}
