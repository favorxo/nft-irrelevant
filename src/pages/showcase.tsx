import ShowcaseModule from '@modules/showcase';
import LoginModule from '@modules/showcase/login';
import { NextPage } from 'next';
import styled from 'styled-components';

const ShowcasePage: NextPage = ({}) => {
  return (
    <Wrapper>
      <ShowcaseModule />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 50px;
`;
export default ShowcasePage;
