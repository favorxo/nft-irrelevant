import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useMoralis, useNativeBalance } from 'react-moralis';
import styles from './NavBar.module.scss';
import NFTIcon from './NFTIcon';
import SearchIcon from './SearchIcon';
import WalletIcon from './WalletIcon';
const NavBar: FC = ({}) => {
  const { authenticate, isAuthenticated } = useMoralis();
  const { getBalances, data: balance, nativeToken } = useNativeBalance();

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.row}>
          <div className={styles.nfticon}>
            <NFTIcon />
          </div>
          <div className={styles.inputContainer}>
            <input
              placeholder="Search items, collections, accounts"
              className={styles.input}
            />
            <div className={styles.button} onClick={() => {}}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <Link href="/" passHref>
            <p className={styles.link}>Categories</p>
          </Link>
          <Link href="/" passHref>
            <p className={styles.link}>Trending</p>
          </Link>
        </div>
        <div className={styles.row}>
          <div onClick={() => authenticate()} className={styles.wallet}>
            <WalletIcon />
            {isAuthenticated && (
              <div className={styles.walletDropdown}>{balance.formatted}</div>
            )}
          </div>

          <div className={styles.image}>
            <Image
              alt="hi"
              src="https://cdn.onlinewebfonts.com/svg/img_329115.png"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
