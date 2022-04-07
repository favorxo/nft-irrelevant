import FilledButton from '@components/Button/FilledButton';
import { mixins } from '@styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FiSearch, FiGithub, FiUser } from 'react-icons/fi';
import useMediaQuery from '@hooks/useMediaQuery';

import styled from 'styled-components';
import Text from '@components/Text/Text';
import { useMoralis } from 'react-moralis';

const NavBar: FC = () => {
  const { authenticate, isAuthenticated } = useMoralis();

  return (
    <NavContainer>
      <InputContainer>
        <SearchIcon>
          <FiSearch size={24} />
        </SearchIcon>
        <InputField placeholder="Search items, collections, accounts" />
      </InputContainer>
      <Links>
        <Link href="/explore" passHref>
          <Hover>
            <Text>Explore</Text>
          </Hover>
        </Link>
        <Link href="/stats" passHref>
          <Hover>
            <Text>Stats</Text>
          </Hover>
        </Link>
        <Link href="/resources" passHref>
          <Hover>
            <Text>Resources</Text>
          </Hover>
        </Link>
        <Link href="/community" passHref>
          <Hover>
            <Text>Community</Text>
          </Hover>
        </Link>
      </Links>
      <Link href="/nft/mint">
        <FilledButton>Create</FilledButton>
      </Link>
      <IconContainer>
        <Link href="https://github.com/favorxo">
          <LinkItem>
            <FiGithub size={24} />
          </LinkItem>
        </Link>
        <Link href="/user">
          <LinkItem onClick={() => isAuthenticated || authenticate()}>
            <FiUser size={24} />
          </LinkItem>
        </Link>
      </IconContainer>
    </NavContainer>
  );
};

const Hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  height: 11rem;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  padding: 3.2rem 1rem;
  ${mixins.desk} {
    padding: 3.2rem ${({ theme }) => theme.paddingHorizontal};
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-right: 7.5rem;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const InputField = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 4rem;
  margin-right: 4rem;
`;

const LinkItem = styled.div`
  margin-right: 3.2rem;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
    margin-bottom: -2px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-left: 3.2rem;
`;

const SearchIcon = styled.div`
  margin-right: 0.6rem;
`;

export default NavBar;
