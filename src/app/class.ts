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

export class Trailer {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
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
  budget: string;
  original_language: string;
  original_title: string;
  popularity: number;
  production_companies: Company;
  production_countries: Country;
  revenue: string;
  spoken_languages: Language;
  status: string;
  tagline: string;
  video: boolean;
  vote_count: number;
  videos: Trailer;
}

export class TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  first_air_date: string;
  homepage: string;
  seasons: TVSeason;
  genre_ids: any;
  origin_contry: any;
  origin_language: string;
  popularity: number;
  vote_count: number;
  original_language: string;
  original_name: string;
}

export class TVSeason {
  id: number;
  title: string;
  overview: string;
  poster_url: string;
  air_date: string;
  episodes: any;
}
