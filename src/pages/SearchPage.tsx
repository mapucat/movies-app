import React, { useState } from 'react';
import SearchInput from '../components/search/SearchInput';
import useSearchMovies from '../hooks/searchMovies';
import SearchResult from '../components/search/SuccessResult';
import Loader from '../components/ui/Loader';
import styled from 'styled-components';
import { spacing } from '../styles/settings/Spacing';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${spacing[600]} 0;
`;

const SearchInvite = () => {
  return (
    <>
      <h2>Looking for a movie? Just type in the title</h2>
    </>
  );
};

const SearchPage = () => {
  const [search, setSearch] = useState('');

  const [movies, state, error] = useSearchMovies(search);

  return (
    <Wrapper>
      <SearchInput onSearch={setSearch}></SearchInput>

      <ResultWrapper>
        {state === 'unloaded' ? <SearchInvite /> : null}
        {state === 'loading' ? <Loader /> : null}
        {state === 'loaded' ? <SearchResult movies={movies}></SearchResult> : null}
      </ResultWrapper>
    </Wrapper>
  );
};

export default SearchPage;
