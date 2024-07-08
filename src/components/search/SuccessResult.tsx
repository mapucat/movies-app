import styled from 'styled-components';
import Movie from '../movies/Movie';
import Icon from '../ui/Icon';

type SearchResultProps = {
  movies: Movie[];
};

const NotFoundMessage = styled.section`
  svg {
    max-width: 300px;
  }
`;

const ResultSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

const SearchResult = ({ movies }: SearchResultProps) => {
  if (!movies?.length) {
    return (
      <NotFoundMessage>
        <Icon name="noData"></Icon>
        <h2>Sorry, no results were found.</h2>
        <p>Check your spelling or try searching for something else.</p>
      </NotFoundMessage>
    );
  }

  return (
    <>
      <h1>Relevant Results</h1>
      <ResultSection>
        {movies.map((movie: Movie) => (
          <Movie movie={movie} />
        ))}
      </ResultSection>
    </>
  );
};

export default SearchResult;
