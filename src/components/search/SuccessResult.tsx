import styled from 'styled-components';
import Movie from '../movies/Movie';
import Icon from '../ui/Icon';

type SearchResultProps = {
  title: string;
  movies: Movie[];
  notFound: {
    useIcon: boolean;
    title: string;
    description: string;
  };
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

const SearchResult = ({ title, movies, notFound }: SearchResultProps) => {
  if (!movies?.length) {
    return (
      <NotFoundMessage>
        {notFound.useIcon ? <Icon name="noData"></Icon> : null}
        <h2>{notFound.title}</h2>
        <p>{notFound.description} </p>
      </NotFoundMessage>
    );
  }

  return (
    <>
      <h2>{title}</h2>
      <ResultSection>
        {movies.map((movie: Movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ResultSection>
    </>
  );
};

export default SearchResult;
