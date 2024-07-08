import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Icon from '../ui/Icon';
import styled from 'styled-components';
import { spacing } from '../../styles/settings/Spacing';

type SearchResultProps = {
  movies: Movie[];
};

const NotFoundMessage = styled.section`
  svg {
    max-width: 300px;
  }
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
    <section>
      <h1>Relevant Results</h1>

      {movies.map((movie: Movie) => (
        <div> {movie.id} </div>
      ))}
    </section>
  );
};

export default SearchResult;
