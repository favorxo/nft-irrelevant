import type { NextPage } from 'next';
import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.scss';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <NavBar />
      <div className={styles.container}>
        <p className={styles.header}>Explore, create, and sell your NFTs</p>
        <p className={styles.subheader}>Enter into world of NFT with us</p>
        <button className={styles.startnow}>Start now</button>
        <p className={styles.or}>or</p>
        <button className={styles.login}>Log in</button>
      </div>
    </div>
  );
};

export default Home;
