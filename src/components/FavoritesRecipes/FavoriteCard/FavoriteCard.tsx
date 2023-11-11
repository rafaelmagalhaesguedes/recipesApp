import { Link } from 'react-router-dom';
import { FavoriteRecipesType } from '../../../types/types';
import useShare from '../../../hooks/useShare';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import shareIcon from '../../../images/shareIcon.svg';
import {
  ButtonsShareFavorite,
  CardBody,
  CardFav,
  CardFavorites,
  CardHeader,
} from './Styles';

function FavoriteCard({ recipes, onFavorite }: any) {
  const { handleClickShare, message } = useShare();

  return (
    <CardFavorites>
      {recipes && recipes.map((recipe: FavoriteRecipesType, index: number) => (
        <CardFav key={ index }>
          <CardHeader>
            <Link
              to={ recipe.type === 'meal'
                ? `/meals/${recipe.id}` : `/drinks/${recipe.id}` }
            >
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>

              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
          </CardHeader>

          <CardBody>
            <div>
              { (recipe.type === 'meal') && (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${recipe.nationality} - ${recipe.category}`}
                </p>
              )}

              { (recipe.type === 'drink') && (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {recipe.alcoholicOrNot}
                </p>
              )}
            </div>

            <ButtonsShareFavorite>

              <button
                onClick={ () => onFavorite(recipe.id) }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  alt="Favorite"
                />
              </button>
              <button onClick={ () => handleClickShare(recipe.id, recipe.type) }>
                {!message && <img
                  src={ shareIcon }
                  data-testid={ `${index}-horizontal-share-btn` }
                  alt="Share"
                />}
                {message && <span>Link copied!</span>}
              </button>
            </ButtonsShareFavorite>
          </CardBody>
        </CardFav>
      ))}
    </CardFavorites>
  );
}

export default FavoriteCard;
