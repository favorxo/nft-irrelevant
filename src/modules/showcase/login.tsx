import {
  useAddress,
  useConnect,
  useMetamask,
  useSDK,
} from '@thirdweb-dev/react';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const LoginModule = () => {
  const { authenticate, isAuthenticated, user, logout, isWeb3Enabled } =
    useMoralis();
  const metamask = useMetamask();

  useEffect(() => {
    metamask().then((e) => console.log(e));
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Wrapper>
      <Heading>
        {isAuthenticated
          ? `Welcome ${user?.getUsername()}`
          : 'Just Login and give me your 12 word pharse'}
      </Heading>
      <Subheading>
        {isAuthenticated
          ? `Don't forget to share with me (tg @favorx) your 12 word phrase!`
          : "You can trust me, it's 100% safe!"}
      </Subheading>
      <LoginButton
        onClick={async () =>
          isAuthenticated ? logout() : authenticate({ provider: 'metamask' })
        }
      >
        {isAuthenticated ? `Logout` : 'Login with Metamask'}
      </LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 4rem;
`;

const Subheading = styled.h2`
  font-size: 2rem;
`;

const LoginButton = styled.button`
  font-size: 3rem;
`;

export default LoginModule;
