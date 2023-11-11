import { FaCheckCircle, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import useProfile from '../../hooks/useProfile';
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileHeading,
  ButtonsContainer,
  UserInfo,
  DoneButton,
  ButtonIcon,
  FavoriteButton,
  LogoutButton,
} from './Styles';

function Profile() {
  const {
    email,
    handleDoneRecipesClick,
    handleFavoriteRecipesClick,
    handleLogoutClick,
  } = useProfile();

  return (
    <ProfileContainer>
      <ProfileHeading>Profile</ProfileHeading>
      <ProfileWrapper>
        <UserInfo>
          <p>
            Email:
            {' '}
            <span data-testid="profile-email">{email}</span>
          </p>
        </UserInfo>
        <ButtonsContainer>
          <DoneButton
            data-testid="profile-done-btn"
            onClick={ handleDoneRecipesClick }
          >
            <ButtonIcon as={ FaCheckCircle } />
            Done Recipes
          </DoneButton>
          <FavoriteButton
            data-testid="profile-favorite-btn"
            onClick={ handleFavoriteRecipesClick }
          >
            <ButtonIcon as={ FaHeart } />
            Favorite Recipes
          </FavoriteButton>
          <LogoutButton
            data-testid="profile-logout-btn"
            onClick={ handleLogoutClick }
          >
            <ButtonIcon as={ FaSignOutAlt } />
            Logout
          </LogoutButton>
        </ButtonsContainer>
      </ProfileWrapper>
    </ProfileContainer>
  );
}

export default Profile;
