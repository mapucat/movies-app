import SearchResult from '../components/search/SuccessResult';
import { useSavedMovies } from '../context/SavedMoviesContext';

const SavedMoviesPage = () => {
  const { movies } = useSavedMovies();

  return (
    <SearchResult
      title="Movies Saved"
      movies={movies}
      notFound={{
        useIcon: false,
        title: 'Sorry, no saved movies were found.',
        description: 'To add one, go to search page and select a movie from the result.',
      }}
    ></SearchResult>
  );
};

export default SavedMoviesPage;