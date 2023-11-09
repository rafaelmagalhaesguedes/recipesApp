import { useState } from 'react';
import {
  NavbarResponsive,
  NavbarContainer,
  MenuToggleButton,
  Bar,
  NavbarLinks,
} from './Styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
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
          <p>Nav</p>
        </NavbarLinks>
      </NavbarContainer>
    </NavbarResponsive>
  );
}

export default Navbar;
