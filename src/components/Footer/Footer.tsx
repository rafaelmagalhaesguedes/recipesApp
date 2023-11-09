import { Link } from 'react-router-dom';
import drinkIcon from '../../images/login/drink.png';
import mealIcon from '../../images/login/meals.png';
import { FooterContainer } from './Styles';
import logoFooter from '../../images/login/recipesApp.png';

function Footer() {
  return (
    <FooterContainer data-testid="footer">
      <div>
        <h3>Developed By.</h3>
        <p>Arley Silva</p>
        <p>Debora A. Silva</p>
        <p>Debora Damas</p>
        <p>Edgard</p>
        <p>Rafael Magalhães</p>
        <br />
        <Link to="https://www.betrybe.com/" target="_blank">
          <span>Trybe</span>
        </Link>
        <span> / </span>
        <Link to="https://be.trybe.com.br/curso-fundamentos-de-front-end" target="_blank">
          <span>Frontend</span>
        </Link>
        <span> / </span>
        <Link to="https://github.com/rafaelmagalhaesguedes/recipesApp" target="_blank">
          <span>Recipes App</span>
        </Link>
      </div>
      <div>
        <img className="logoFooter" src={ logoFooter } alt="logo" />
      </div>
      <div>
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
      </div>
    </FooterContainer>
  );
}
export default Footer;
