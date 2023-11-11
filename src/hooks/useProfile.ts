import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useProfile() {
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

  return { email, handleDoneRecipesClick, handleFavoriteRecipesClick, handleLogoutClick };
}

export default useProfile;
