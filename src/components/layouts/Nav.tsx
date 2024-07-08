import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/settings/Colors';
import { spacing } from '../../styles/settings/Spacing';

type NavProps = {
  links: {
    label: string;
    url: string;
  }[];
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

const Item = styled.li`
  a {
    color: ${colors.secondary_text};
    text-decoration: none;

    &.nav-link--active {
      font-weight: bold;
    }
  }
`;

const Nav = ({ links }: NavProps) => {
  return (
    <Wrapper>
      <List>
        {links.map((link) => (
          <Item>
            <NavLink to={link.url} className={({ isActive }) => (isActive ? 'nav-link--active' : '')}>
              {link.label}
            </NavLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Nav;
