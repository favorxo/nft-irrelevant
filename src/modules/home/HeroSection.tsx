import FilledButton from '@components/Button/FilledButton';
import NavBar from '@components/NavBar';
import Text from '@components/Text/Text';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const HeroSection: FC = ({}) => {
  return (
    <Container>
      <NavBar />
      <Heading>Explore, Collect, and Sell NFTs</Heading>
      <Text weight={400} size={2} mb={5.6}>
        On the world{`'`}s Worst & Smallest NFT marketplace {'<3'}
      </Text>
      <Link href="/explore" passHref>
        <FilledButton>Explore</FilledButton>
      </Link>
      <BigNFT>NFT</BigNFT>
    </Container>
  );
};

const Heading = styled.h1`
  font-size: 7.2rem;
  max-width: 72rem;
  text-align: center;
  line-height: 9.4rem;
  margin-top: 8.6rem;
  margin-bottom: 2.4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom right, #fff0d4, #cfe0e6);
`;

const BigNFT = styled.h1`
  font-size: 40rem;
  color: #f4f8f7;
  user-select: none;
  white-space: nowrap;
  line-height: 1;
  margin-bottom: -20rem;
  margin-top: 5rem;
  white-space: nowrap;
  overflow: hidden;
`;

export default HeroSection;
