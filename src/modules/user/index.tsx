import NavBar from '@components/NavBar';
import { useNFTCollection } from '@thirdweb-dev/react';
import { NFTMetadataOwner } from '@thirdweb-dev/sdk';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const UserModule = ({}) => {
  const nftContract = useNFTCollection(
    '0xc7660cf52264c885a4ca77f09972abb857a3c63c'
  );
  const [nfts, setNFTS] = useState<NFTMetadataOwner[]>([]);
  const { user } = useMoralis();
  useEffect(() => {
    nftContract?.getAll().then((res) => {
      setNFTS(res);
    });
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <InfoWrapper>
        <h1>{user?.getUsername()}</h1>
      </InfoWrapper>
      <NFTsWrapper>
        {nfts.map((nft) => (
          <NFTPreview>
            <Image src={nft.metadata.image} />
          </NFTPreview>
        ))}
      </NFTsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  flex-basis: 300px;
`;

const NFTsWrapper = styled.div`
  display: flex;
`;

const NFTPreview = styled.div`
  padding: 1rem;
  background-color: red;
  position: relative;
  border-radius: 8px;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 20rem;
  width: 100%;
`;
export default UserModule;
