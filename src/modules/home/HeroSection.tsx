import FilledButton from '@components/Button/FilledButton';
import NavBar from '@components/NavBar';
import Text from '@components/Text/Text';
import { FC } from 'react';
import styled from 'styled-components';

const HeroSection: FC = ({}) => {
  return (
    <Container>
      <NavBar />
      <Heading>Explore, Collect, and Sell NFTs</Heading>
      <Text weight={400} size={2} mb={5.6}>
        On the world{`'`}s Best & largest NFT marketplace
      </Text>
      <FilledButton>Explore</FilledButton>
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
`;
export default HeroSection;
