import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/settings/Colors';

type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  variant?: 'flat' | 'icon' | 'stroked';
  onClick: () => void;
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

const Button = ({ color = 'primary', variant = 'flat', children, ...props }: ButtonProps) => {
  const classes = `btn btn--${color} btn--${variant}`;
  return (
    <Wrapper className={classes} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;
