import { useMetamask, useNFTCollection } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import { useState } from 'react';

const CreateNFT: NextPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const nftContract = useNFTCollection(
    '0xC7660Cf52264c885a4cA77f09972abB857A3C63c'
  );
  const connectToWallet = useMetamask();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const metadata = { name, description, image: file };
    const res = await nftContract?.mint(metadata);
    console.log(res?.data);
  };

  return (
    <>
      <div style={{ paddingTop: 500 }}>
        <button
          onClick={() => {
            console.log('trying');
            connectToWallet();
            nftContract?.getAll().then((data) => console.log(data));
          }}
        >
          connect
        </button>
        <form onSubmit={onSubmit}>
          <input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <input
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="file"
            type="file"
            onChange={(e) => setFile(e.target.files![0])}
            accept="image/png, image/jpeg"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
