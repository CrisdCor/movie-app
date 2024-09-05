import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: 'df7dbbf95b2a84acb36af60170ce80de',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
