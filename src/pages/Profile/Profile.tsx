import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaHeart, FaSignOutAlt } from 'react-icons/fa';
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
      <h2 className={ styles.profileHeading }>Profile</h2>
      <div className={ styles.userInfo }>
        <p>
          Email:
          {' '}
          <span data-testid="profile-email">{email}</span>
        </p>
      </div>
      <div className={ styles.buttonsContainer }>
        <button
          className={ `${styles.profileButton} ${styles.doneButton}` }
          data-testid="profile-done-btn"
          onClick={ handleDoneRecipesClick }
        >
          <FaCheckCircle
            className={ `${styles.buttonIcon} ${styles.doneButtonIcon}` }
          />
          {' '}
          Done Recipes
        </button>
        <button
          className={ `${styles.profileButton} ${styles.favoriteButton}` }
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteRecipesClick }
        >
          <FaHeart className={ `${styles.buttonIcon} ${styles.favoriteButtonIcon}` } />
          {' '}
          Favorite Recipes
        </button>
        <button
          className={ `${styles.profileButton} ${styles.logoutButton}` }
          data-testid="profile-logout-btn"
          onClick={ handleLogoutClick }
        >
          <FaSignOutAlt className={ `${styles.buttonIcon} ${styles.logoutButtonIcon}` } />
          {' '}
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
