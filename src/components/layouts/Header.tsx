import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

import logo from '../../logo.svg';
import { spacing } from '../../styles/settings/Spacing';

type HeaderProps = {
  nav: {
    links: string[];
  };
};

const Wrapper = styled.header`
  padding: ${spacing[600]} 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ nav: { links } }: HeaderProps) => {
  return (
    <Wrapper>
      <img src={logo} className="App-logo" alt="logo" />
      <Nav links={links}></Nav>
      <Button variant="icon">
        <Icon name="search"></Icon>
      </Button>
    </Wrapper>
  );
};

export default Header;
