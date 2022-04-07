import BuyNFT from './buy';
import ListingNFT from './listNFT';
import LoginModule from './login';
import MintModule from './mint';

const ShowcaseModule = ({}) => {
  return (
    <>
      <LoginModule />
      <MintModule />
      <ListingNFT />
      <BuyNFT />
    </>
  );
};

export default ShowcaseModule;
