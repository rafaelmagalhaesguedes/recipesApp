import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../App.css';

export default function Header() {
  const [title, setTitle] = useState('');
  const [showSearchButton, setShowSearchButton] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (pathname) {
      case '/drinks':
        setTitle('Drinks');
        break;
      case '/meals':
        setTitle('Meals');
        break;
      case '/profile':
        setShowSearchButton(false);
        setTitle('Profile');
        break;
      case '/done-recipes':
        setShowSearchButton(false);
        setTitle('Done Recipes');
        break;
      case '/favorite-recipes':
        setShowSearchButton(false);
        setTitle('Favorite Recipes');
        break;
      default:
        setTitle('');
    }
  }, [pathname]);

  const handleProfileChange = () => {
    navigate('/profile');
  };

  return (
    <header>
      <button onClick={ handleProfileChange }>
        <img
          data-testid="profile-top-btn"
          alt="profileIcon"
          src={ profileIcon }
        />
      </button>
      {showSearchButton ? (
        <img
          data-testid="search-top-btn"
          alt="searchIcon"
          src={ searchIcon }
        />
      ) : null }
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}
