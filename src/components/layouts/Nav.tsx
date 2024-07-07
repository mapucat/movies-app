import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/settings/Colors';
import { spacing } from '../../styles/settings/Spacing';

type NavProps = {
  links: string[];
};

const Wrapper = styled.nav`
  display: flex;

  color: ${colors.secondary_text};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  gap: ${spacing[500]};
`;

const Item = styled.li``;

const Nav = ({ links }: NavProps) => {
  return (
    <Wrapper>
      <List>
        {links.map((link) => (
          <Item>{link}</Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Nav;
