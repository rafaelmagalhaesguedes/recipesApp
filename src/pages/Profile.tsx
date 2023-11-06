import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>
        <p>
          Email:
          {' '}
          <span data-testid="profile-email">{email}</span>
        </p>
      </div>
      <div>
        <button
          data-testid="profile-done-btn"
          onClick={ handleDoneRecipesClick }
        >
          Done Recipes

        </button>
        <button
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteRecipesClick }
        >
          Favorite Recipes

        </button>
        <button
          data-testid="profile-logout-btn"
          onClick={ handleLogoutClick }
        >
          Logout

        </button>
      </div>
    </div>
  );
}

export default Profile;
