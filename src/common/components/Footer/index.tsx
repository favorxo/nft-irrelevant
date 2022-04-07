import { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = ({}) => {
  return (
    <Wrapper>
      Donate Me {'->'} 0xd18c0a2419C7c81d7A5e776305210d9B35674885 {'<-'} Donate
      Me
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 40rem;
  margin-top: 5rem;
`;

export default Footer;
