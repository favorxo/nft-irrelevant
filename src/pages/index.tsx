import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import HomeModule from '@modules/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomeModule />
    </>
  );
};

export default Home;
