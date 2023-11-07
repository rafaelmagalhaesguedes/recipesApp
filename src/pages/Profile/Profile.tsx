import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

function Profile() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('user');
    if (storedEmail) {
      const parsedEmail = JSON.parse(storedEmail).email;
      setEmail(parsedEmail);
    }
  }, []);

  const handleDoneRecipesClick = () => {
    navigate('/done-recipes');
  };

  const handleFavoriteRecipesClick = () => {
    navigate('/favorite-recipes');
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className={ styles.profileContainer }>
      <div className={ styles.userInfo }>
        <p className={ styles.userP }>
          Email:
          {' '}
          <span data-testid="profile-email">{email}</span>
        </p>
      </div>
      <div className={ styles.buttonsContainer }>
        <button
          data-testid="profile-done-btn"
          onClick={ handleDoneRecipesClick }
          className={ `${styles.profileButton} ${styles.doneButton}` }
        >
          Done Recipes

        </button>
        <button
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteRecipesClick }
          className={ `${styles.profileButton} ${styles.favoriteButton}` }
        >
          Favorite Recipes

        </button>
        <button
          data-testid="profile-logout-btn"
          onClick={ handleLogoutClick }
          className={ `${styles.profileButton} ${styles.logoutButton}` }
        >
          Logout

        </button>
      </div>
    </div>
  );
}

export default Profile;
