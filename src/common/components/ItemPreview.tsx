import styled from 'styled-components';

const ItemPreview = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <Wrapper>
      <StyledImage
        src={
          imgUrl ||
          'https://a1-images.myspacecdn.com/images03/34/608f22993bac4923af85690000c8dfe2/600x600.jpg'
        }
      />
      <HiddenInfo>
        <ProfileContainer>
          <Avatar src="https://a1-images.myspacecdn.com/images03/34/608f22993bac4923af85690000c8dfe2/600x600.jpg"></Avatar>
          <ProfileName>Name</ProfileName>
        </ProfileContainer>
        <BuyButton>BUY</BuyButton>
      </HiddenInfo>
      <Chip>123ETH</Chip>
    </Wrapper>
  );
};

const ProfileName = styled.p`
  font-size: 2rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const Chip = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 1.6rem;
  background-color: #34caa5;
  padding: 5px;
  border-radius: 1rem 0;
  font-weight: 600;
`;

const Wrapper = styled.div`
  height: 40rem;
  width: 30rem;
  border-radius: 0.8rem;
  background-color: aliceblue;
  padding: 2rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
`;

const HiddenInfo = styled.div`
  flex-direction: column;
  display: flex;
  transition: all 0.2s;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0.8rem;
  opacity: 0;
  backdrop-filter: blur(5px) brightness(50%);
  align-items: stretch;
  ${Wrapper}:hover & {
    backdrop-filter: blur(5px) brightness(50%);
    opacity: 1;
  }
`;

const BuyButton = styled.button`
  margin: 2rem;
  height: 8rem;
  border: none;
  border-radius: 1rem;
  font-size: 4rem;
  letter-spacing: 2rem;
  font-weight: 700;
  background-image: linear-gradient(to right, #fcad02, #ff0041);
  color: ${({ theme }) => theme.colors.interface[2]};
  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default ItemPreview;
