export class Genre {
  id: number;
  name: string;
}

export class Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export class Company {
  id: number;
  name: string;
}

export class Country {
  iso_3166_1: string;
  name: string;
}

export class Language {
  iso_639_1: string;
  name: string;
}

export class Movie {
  id: number;
  imdb_id: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  homepage: string;
  runtime: number;
  genres: Genre;
  adult: boolean;
  belongs_to_collection: Collection;
  budget: number;
  original_language: string;
  original_title: string;
  popularity: number;
  production_companies: Company;
  production_countries: Country;
  revenue: number;
  spoken_languages: Language;
  status: string;
  tagline: string;
  video: boolean;
  vote_count: number;
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
