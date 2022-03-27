import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const NavBar: FC = () => {
  return <HolyContainer>
    pizdec
  </HolyContainer>;
};

const HolyContainer = styled.div`
  position: sticky;
  width: 100vw;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
`;

export default NavBar;
