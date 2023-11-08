import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.png';
import mealIcon from '../../images/mealIcon.png';
import { FooterContainer } from './Styles';

function Footer() {
  return (
    <FooterContainer data-testid="footer">
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Bebidas"
        />
      </Link>
      <Link to="/meals">
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="Comidas"
        />
      </Link>
    </FooterContainer>
  );
}
export default Footer;
