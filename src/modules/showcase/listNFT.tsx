import {
  useAddress,
  useMarketplace,
  useNFTCollection,
} from '@thirdweb-dev/react';
import { NATIVE_TOKEN_ADDRESS, NFTMetadataOwner } from '@thirdweb-dev/sdk';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ListingNFT = ({}) => {
  const marketplaceContract = useMarketplace(
    '0xE9dA418dF5F6637C5324191aa1F5727FE7a45AAc'
  );
  const nftContract = useNFTCollection(
    '0xC7660Cf52264c885a4cA77f09972abB857A3C63c'
  );
  const address = useAddress();
  const [ownedNFTs, setOwnedNFTs] = useState<NFTMetadataOwner[]>([]);
  const [chosen, setChosen] = useState<number | undefined>();
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(1);
  useEffect(() => {
    if (!address) return;

    fetchNFTs();
  }, [address]);

  const fetchNFTs = () => {
    nftContract
      ?.getOwned(address)
      .then((res) => setOwnedNFTs(res))
      .catch((res) => console.error(res));
  };
  const sellNFT = () => {
    if (chosen === undefined) return;

    const auction = {
      assetContractAddress: '0xC7660Cf52264c885a4cA77f09972abB857A3C63c',
      tokenId: ownedNFTs[chosen].metadata.id,
      startTimeInSeconds: 0,
      listingDurationInSeconds: seconds!,
      quantity: quantity!,
      currencyContractAddress: NATIVE_TOKEN_ADDRESS,
      buyoutPricePerToken: `${price!}`,
    };

    const auctionThing = marketplaceContract?.direct;
    auctionThing?.createListing(auction);
  };

  return (
    <>
      {address && (
        <Wrapper>
          <Heading>Sell your nft! With just 70% royalties!</Heading>
          <Content>
            {ownedNFTs.map((nft, idx) => {
              return (
                <NFT onClick={() => setChosen(idx)} chosen={idx === chosen}>
                  <NFTImage src={nft.metadata.image} />
                  <NFTLabel>{nft.metadata.name}</NFTLabel>
                  <NFTDescription>{nft.metadata.description}</NFTDescription>
                </NFT>
              );
            })}
          </Content>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sellNFT();
            }}
          >
            <Label>price</Label>
            <Input
              placeholder="price"
              value={price!}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Label>time</Label>
            <Input
              placeholder="time in seconds"
              value={seconds!}
              onChange={(e) => setSeconds(Number(e.target.value))}
            />
            <Label>quantity</Label>
            <Input
              placeholder="time in quantity"
              value={quantity!}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Submit>Sell</Submit>
          </Form>
          <RefreshButton onClick={() => fetchNFTs()}>Refresh</RefreshButton>
        </Wrapper>
      )}
    </>
  );
};
const RefreshButton = styled.button``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;
const Label = styled.label`
  font-size: 1.5rem;
`;
const Heading = styled.h1`
  font-size: 4rem;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const NFT = styled.div<{ chosen: boolean }>`
  width: 200px;
  height: 300px;
  padding: 10px;
  background-color: hsla(0deg 0% 0% / 0.2);
  border: 4px solid;
  border-color: ${(props) => props.chosen && 'red'};
`;

const NFTImage = styled.img`
  width: 200px;
  margin-left: -10px;
  height: 200px;
  object-fit: contain;
  line-height: 1;
`;

const NFTLabel = styled.h1`
  font-size: 2rem;
`;

const NFTDescription = styled.p`
  font-size: 1.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Submit = styled.button``;
export default ListingNFT;
