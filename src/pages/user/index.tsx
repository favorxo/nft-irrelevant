import LoginModule from '@modules/login/login';
import UserModule from '@modules/user';
import { useNFTCollection } from '@thirdweb-dev/react';
import { NFTMetadataOwner } from '@thirdweb-dev/sdk';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const UserPage = ({}) => {
  const { isAuthenticated } = useMoralis();
  return <>{isAuthenticated ? <UserModule /> : <LoginModule />}</>;
};

export default UserPage;
