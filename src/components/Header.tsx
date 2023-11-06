import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const [title, setTitle] = useState('Meals');
  const [showSearchButton, setShowSearchButton] = useState(true);
  const [searchVisible, setSearchVisible] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/drinks') {
      setTitle('Drinks');
    } else if (pathname === '/meals') {
      setTitle('Meals');
    } else if (pathname === '/profile') {
      setShowSearchButton(false);
      setTitle('Profile');
    } else if (pathname === '/done-recipes') {
      setShowSearchButton(false);
      setTitle('Done Recipes');
    } else if (pathname === '/favorite-recipes') {
      setShowSearchButton(false);
      setTitle('Favorite Recipes');
    }
  }, [pathname]);

  const handleProfileChange = () => {
    navigate('/profile');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
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
        <button
          onClick={ toggleSearch }
        >
          <img
            data-testid="search-top-btn"
            alt="searchIcon"
            src={ searchIcon }
          />
        </button>
      ) : null }

      {searchVisible && (
        <SearchBar />
      )}
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}
