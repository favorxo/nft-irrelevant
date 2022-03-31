import { Login } from '@components/Button/Login';
import NavBar from '@components/NavBar';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import styled from 'styled-components';
import HeroSection from './HeroSection';

const HomeModule: NextPage = () => {
  const { authenticate, auth, isAuthenticated, user } = useMoralis();
  const { data, error, isLoading } = useMoralisQuery('_Users');
  useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated]);
  return (
    <Container>
      <HeroSection />
    </Container>
  );
};

const Container = styled.data`
  display: flex;
  background-image: linear-gradient(to bottom right, #fff0d4, #cfe0e6);
  background-size: cover;
  height: 100vh;
  flex-direction: column;
`;

export default HomeModule;
