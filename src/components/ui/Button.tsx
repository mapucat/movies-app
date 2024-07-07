import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/settings/Colors';

type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  variant?: 'flat' | 'icon' | 'stroked';
};

const Wrapper = styled.button`
  &.btn {
    &.btn--icon {
      background-color: transparent;
      border: none;
      color: ${colors.secondary_text};

      cursor: pointer;
    }
  }
`;

const Button = ({ color = 'primary', variant = 'flat', children }: ButtonProps) => {
  const classes = `btn btn--${color} btn--${variant}`;
  return <Wrapper className={classes}>{children}</Wrapper>;
};

export default Button;
