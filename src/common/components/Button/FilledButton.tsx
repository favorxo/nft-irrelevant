import { FC } from 'react';
import styled from 'styled-components';

const FilledButton = styled.button`
  font-size: 1.6rem;
  padding: 1.5rem 3.5rem;
  background-color: #04091e;
  color: #fff;
  font-family: inherit;
  font-weight: 600;
  border-radius: 0.8rem;
  border: none;
  outline: none;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default FilledButton;
