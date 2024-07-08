import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

import logo from '../../logo.svg';
import { spacing } from '../../styles/settings/Spacing';
import { Link, useLocation } from 'react-router-dom';

type HeaderProps = {
  nav: {
    links: {
      label: string;
      url: string;
    }[];
  };
};

const Wrapper = styled.header`
  padding: ${spacing[600]} 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ nav: { links } }: HeaderProps) => {
  const location = useLocation();
  const [savedMoviesPageActive, setSavedMoviesPageActive] = useState<boolean>(false);

  useEffect(() => {
    setSavedMoviesPageActive(location.pathname === '/saved');
  }, [location]);

  return (
    <Wrapper>
      <img src={logo} className="App-logo" alt="logo" />
      <Nav links={links}></Nav>
      <Button variant="icon">
        <Link to="/saved">
          <Icon name={savedMoviesPageActive ? 'saveFilled' : 'save'}></Icon>
        </Link>
      </Button>
    </Wrapper>
  );
};

export default Header;
