import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//
import iconRecipes from '../../images/icon_recipes_app.png';
import icontText from '../../images/logo_title_recipes_app.png';
import searchIcon from '../../images/searchIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
//
import iconMeal from '../../images/iconDish.png';
import iconDrink from '../../images/iconDrink.png';
import iconFavorites from '../../images/iconFavorites.png';
import iconDone from '../../images/iconDone.png';
import iconProfile from '../../images/iconProfile.png';
import SearchBar from '../SearchBar';
//
import {
  HeaderNavbar,
  HeaderTitle,
  HeaderWrapper,
  NavbarButtons,
  NavbarLogo,
} from './Styles';

export default function Header() {
  const [title, setTitle] = useState('');
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
    <HeaderWrapper>
      <HeaderNavbar>
        <NavbarLogo>
          <img src={ iconRecipes } alt="Logo" width={ 42 } />
          <img src={ icontText } alt="Logo" width={ 109 } height={ 16 } />
        </NavbarLogo>
        <NavbarButtons>
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
          ) : null}

          <button onClick={ handleProfileChange }>
            <img
              data-testid="profile-top-btn"
              alt="profileIcon"
              src={ profileIcon }
            />
          </button>
        </NavbarButtons>
      </HeaderNavbar>
      <HeaderTitle>
        {pathname === '/meals' && <img src={ iconMeal } alt="Meals" /> }
        {pathname === '/drinks' && <img src={ iconDrink } alt="Drinks" /> }
        {pathname === '/profile' && <img src={ iconProfile } alt="Profile" /> }
        {pathname === '/done-recipes' && <img src={ iconDone } alt="DoneRecipes" /> }
        {pathname === '/favorite-recipes' && <img src={ iconFavorites } alt="Favorit" /> }
        <h1 data-testid="page-title">{title}</h1>
      </HeaderTitle>
      <div>
        {searchVisible && (
          <SearchBar />
        )}
      </div>
    </HeaderWrapper>
  );
}
