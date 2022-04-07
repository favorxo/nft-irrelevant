import { LoginButton } from '@components/Button/Login';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import MainSection from './MainSection';

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
      <MainSection />
      <Footer />
    </Container>
  );
};

const Container = styled.data`
  display: flex;
  background-size: cover;
  flex-direction: column;
`;

export default HomeModule;
