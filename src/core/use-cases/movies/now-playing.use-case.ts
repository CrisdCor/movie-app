import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastucture/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastucture/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );

    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }
};
