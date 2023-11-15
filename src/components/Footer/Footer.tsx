import { Link } from 'react-router-dom';
import drinkIcon from '../../images/login/drink.png';
import mealIcon from '../../images/login/meals.png';
import { FooterContainer } from './Styles';
import logoFooter from '../../images/login/recipesApp.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer data-testid="footer">
      <div className="linksFooter">
        <h3>Developed By.</h3>
        <p>Arley Pereira</p>
        <p>Debora A. Silva</p>
        <p>Debora Damas</p>
        <p>Edgar Andrade</p>
        <p>Rafael Magalhães</p>
        <br />
        <br />
        <strong>Turma 34</strong>
      </div>
      <div className="logFooter">
        <img className="imageLogo" src={ logoFooter } alt="logo" />
      </div>
      <div className="buttonsFooter">
        <Link to="/drinks" onClick={ scrollToTop }>
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="Bebidas"
          />
        </Link>
        <div>
          <h4>Recipes App</h4>
        </div>
        <Link to="/meals" onClick={ scrollToTop }>
          <img
            data-testid="meals-bottom-btn"
            src={ mealIcon }
            alt="Comidas"
          />
        </Link>
      </div>
      <div className="menuFooter">
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
    </FooterContainer>
  );
}
export default Footer;
