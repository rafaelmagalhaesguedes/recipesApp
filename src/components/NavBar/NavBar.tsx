import { useState } from 'react';
import iconMeal from '../../images/login/meals.png';
import iconDrink from '../../images/login/drink.png';
import iconFavorites from '../../images/login/favorite.png';
import iconDone from '../../images/login/done.png';
import iconProfile from '../../images/login/profile.png';
import {
  NavbarResponsive,
  NavbarContainer,
  MenuToggleButton,
  Bar,
  NavbarLinks,
  NavLinked,
} from './Styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarResponsive>
      <NavbarContainer>
        <MenuToggleButton
          className={ isOpen ? 'active' : '' }
          onClick={ handleToggleMenu }
        >
          <Bar />
          <Bar />
          <Bar />
        </MenuToggleButton>

        <NavbarLinks className={ isOpen ? 'active' : '' }>
          <NavLinked to="/meals" onClick={ closeMenu }>
            <img src={ iconMeal } alt="Meals" />
            Meals
          </NavLinked>

          <NavLinked to="/drinks" onClick={ closeMenu }>
            <img src={ iconDrink } alt="Drinks" />
            Drinks
          </NavLinked>

          <NavLinked to="/done-recipes" onClick={ closeMenu }>
            <img src={ iconDone } alt="Done Recipes" />
            Done Recipes
          </NavLinked>

          <NavLinked to="/favorite-recipes" onClick={ closeMenu }>
            <img src={ iconFavorites } alt="Favorite Recipes" />
            Favorite Recipes
          </NavLinked>

          <NavLinked to="/profile" onClick={ closeMenu }>
            <img src={ iconProfile } alt="Profile" />
            Profile
          </NavLinked>
        </NavbarLinks>
      </NavbarContainer>
    </NavbarResponsive>
  );
}

export default Navbar;
