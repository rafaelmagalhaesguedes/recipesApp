import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.png';
import searchIcon from '../../images/searchIcon.png';
import iconRecipes from '../../images/icon_recipes_app.png';
import icontText from '../../images/logo_title_recipes_app.png';
import iconMeal from '../../images/iconDish.png';
import iconDrink from '../../images/iconDrink.png';
import SearchBar from '../SearchBar/SearchBar';
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
        <img src={ pathname === '/meals' ? iconMeal : iconDrink } alt="Dish" />
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
