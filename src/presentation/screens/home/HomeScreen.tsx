import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <Text style={{color: 'black'}}>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Mejor calificadas */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* Proximamente */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
