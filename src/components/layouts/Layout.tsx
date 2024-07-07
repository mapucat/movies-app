import React from 'react';

import Header from './Header';
import styled from 'styled-components';
import { colors } from '../../styles/settings/Colors';
import { spacing } from '../../styles/settings/Spacing';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  background-color: ${colors.background_base};
  height: 100vh;
  padding: 0 ${spacing[800]};
`;

const NAVIGATION_LINKS = ['Home', 'Discover', 'About'];

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header nav={{ links: NAVIGATION_LINKS }}></Header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
