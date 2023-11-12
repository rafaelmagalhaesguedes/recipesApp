import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
//
import iconRecipesMobile from '../../images/login/icon.png';
import iconRecipes from '../../images/login/recipesApp.png';
import searchIcon from '../../images/login/search.png';
import profileIcon from '../../images/login/user_profile.png';
//
import iconMeal from '../../images/login/meals.png';
import iconDrink from '../../images/login/drink.png';
import iconFavorites from '../../images/login/favorite.png';
import iconDone from '../../images/login/done.png';
import iconProfile from '../../images/login/profile.png';
import SearchBar from '../SearchBar/SearchBar';
//
import {
  HeaderNavbar,
  HeaderTitle,
  HeaderWrapper,
  NavbarButtons,
  NavbarLogo,
} from './Styles';
import Navbar from '../NavBar/NavBar';

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
    setSearchVisible(false);
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
          <Link to="/meals">
            <img className="logo" src={ iconRecipes } alt="Logo" />
          </Link>
          <Link to="/meals">
            <img className="logo_mobile" src={ iconRecipesMobile } alt="LogoMobile" />
          </Link>
        </NavbarLogo>
        <div className="navbar">
          <SearchBar />
        </div>

        <HeaderTitle>
          {pathname === '/meals' && <img src={ iconMeal } alt="Meals" /> }
          {pathname === '/drinks' && <img src={ iconDrink } alt="Drinks" /> }
          {pathname === '/profile' && <img src={ iconProfile } alt="Profile" /> }
          {pathname === '/done-recipes' && <img src={ iconDone } alt="DoneRecipes" /> }
          {pathname === '/favorite-recipes' && <img src={ iconFavorites } alt="Favo" /> }
          <h1 data-testid="page-title">{title}</h1>
        </HeaderTitle>

        <NavbarButtons>
          {showSearchButton ? (
            <button
              onClick={ toggleSearch }
            >
              <img
                className="searchIcon"
                data-testid="search-top-btn"
                alt="searchIcon"
                src={ searchIcon }
              />
            </button>
          ) : null}

          <button onClick={ handleProfileChange }>
            <img
              className="profileIcon"
              data-testid="profile-top-btn"
              alt="profileIcon"
              src={ profileIcon }
            />
          </button>
        </NavbarButtons>

        <Navbar />
      </HeaderNavbar>
      <div>
        {searchVisible && (
          <SearchBar />
        )}
      </div>
    </HeaderWrapper>
  );
}
