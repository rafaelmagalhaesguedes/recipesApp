import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 50%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const ProfileWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  height: 300px;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 55px;
    max-width: 400px;
    padding: 20px;
  }
`;

export const ProfileHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 0;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonIcon = styled.span`
  margin-right: 10px;
`;

export const ProfileButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  height: 38.69px;
  padding: 10px 20px;
  width: 217.44px;

  &:hover {
    background-color: #45a049;
  }
`;

export const DoneButton = styled(ProfileButton)`
  background-color: #4caf50;

  &:hover {
    background-color: #45a049;
  }
`;

export const FavoriteButton = styled(ProfileButton)`
  background-color: #ff9800;

  &:hover {
    background-color: #e68a00;
  }
`;

export const LogoutButton = styled(ProfileButton)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;
