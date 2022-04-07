import { useMetamask, useNFTCollection } from '@thirdweb-dev/react';
import { FormEventHandler, useState } from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const MintModule = ({}) => {
  const nftContract = useNFTCollection(
    '0xC7660Cf52264c885a4cA77f09972abB857A3C63c'
  );

  const { isAuthenticated, user } = useMoralis();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const mintNFT = async () => {
    if (!name || !description || !file) return;
    const metadata = { name, description, image: file };
    setLoading(true);
    const res = await nftContract?.mint(metadata);
    setLoading(false);
    console.log(res?.data);
  };

  return (
    <Wrapper>
      {isAuthenticated ? (
        <>
          <Heading>Чеканить нфт! Подписать контракт!</Heading>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              mintNFT();
            }}
          >
            <Label>name</Label>
            <InputField
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label>description</Label>
            <InputField
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Label>file</Label>
            <InputField
              placeholder="file"
              type="file"
              onChange={(e) => setFile(e.target.files![0])}
            />
            <Submit>Mint NFT</Submit>
            {loading && <Heading>It's loading...</Heading>}
          </Form>
        </>
      ) : (
        <Heading>Login first to mint nft!</Heading>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1.5rem;
`;
const Heading = styled.h1`
  font-size: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Submit = styled.button``;

const InputField = styled.input``;
export default MintModule;
