import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

const LoginModule = ({}) => {
  const { authenticate } = useMoralis();
  const router = useRouter();
  return (
    <Wrapper>
      <LoginButton
        onClick={() => authenticate().then((res) => router.push('/user'))}
      >
        LOGIN
      </LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: black;
  text-transform: uppercase;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 8px;
`;
export default LoginModule;
