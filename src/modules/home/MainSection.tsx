import ItemPreview from '@components/ItemPreview';
import { FC } from 'react';
import styled from 'styled-components';

const MainSection: FC = ({}) => {
  // TODO: Fetch amount of items from DB
  return (
    <Wrapper>
      <HeadingGroup>
        <Heading>Digital Products</Heading>
        <Subheading>30k Products</Subheading>
      </HeadingGroup>
      <ItemsWrapper>
        {Array.from(Array(19)).map((_) => (
          <ItemPreview imgUrl="" />
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1324px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20rem;
`;

const Heading = styled.h1`
  font-size: 4.8rem;
  font-weight: 600;
  display: inline-block;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.interface[0]};
`;

const Subheading = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  display: inline-block;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.interface[1]};
`;

const HeadingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5rem;
`;

const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ControlWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default MainSection;
