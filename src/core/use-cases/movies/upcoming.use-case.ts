import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastucture/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastucture/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );

    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - UpcomingUseCase');
  }
};
