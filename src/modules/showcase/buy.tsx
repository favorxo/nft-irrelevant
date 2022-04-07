import { useAddress, useMarketplace } from '@thirdweb-dev/react';
import { AuctionListing, DirectListing } from '@thirdweb-dev/sdk';
import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const BuyNFT = ({}) => {
  const marketplaceContract = useMarketplace(
    '0xE9dA418dF5F6637C5324191aa1F5727FE7a45AAc'
  );
  const [listings, setListings] = useState<(AuctionListing | DirectListing)[]>(
    []
  );
  const address = useAddress();
  const [chosen, setChosen] = useState<undefined | number>();
  useEffect(() => {
    fetchNFTs();
  }, []);

  const fetchNFTs = () => {
    marketplaceContract?.getActiveListings().then((res) => {
      setListings(res);
    });
  };
  const buy = () => {
    console.log(listings[chosen!].id);
    marketplaceContract?.direct
      .buyoutListing(listings[chosen!].id, 1)
      .then((res) => alert(`${res.receipt} bought this piece of... art `));
  };
  return (
    <>
      {address && (
        <Wrapper>
          <Content>
            {listings.map((nft, idx) => (
              <NFT chosen={chosen === idx} onClick={() => setChosen(idx)}>
                <NFTImage src={nft.asset.image} />
                <NFTLabel>{nft.asset.name}</NFTLabel>
                <NFTDescription>{nft.asset.description}</NFTDescription>
                <NFTDetails>
                  {nft.buyoutCurrencyValuePerToken.displayValue}
                  {nft.buyoutCurrencyValuePerToken.symbol}
                </NFTDetails>
              </NFT>
            ))}
          </Content>
          <BuyButton
            onClick={() => {
              buy();
            }}
          >
            Buy this NFT
          </BuyButton>
          <RefreshButton onClick={() => fetchNFTs()}>Refresh</RefreshButton>
        </Wrapper>
      )}
    </>
  );
};

const RefreshButton = styled.button``;

const BuyButton = styled.button``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const NFTDetails = styled.pre`
  font-size: 13px;
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

export default BuyNFT;
