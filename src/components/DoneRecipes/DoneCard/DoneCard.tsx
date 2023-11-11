import { Link } from 'react-router-dom';
import { DoneRecipesType } from '../../../types/types';
import shareIcon from '../../../images/iconShareDone.png';
import {
  DoneRecipesCard,
  ButtonShare,
  Card,
  CateroryType,
  ImageCard,
  Infos,
  Name,
  TitleInfos,
} from './Styles';

interface DoneCardProps {
  filteredRecipes: DoneRecipesType[];
  handleClickShare: (recipeId: number, recipeType: string) => void;
  message: string;
}

function DoneCard({ filteredRecipes, handleClickShare, message }: DoneCardProps) {
  return (
    <DoneRecipesCard>
      {filteredRecipes && filteredRecipes.map((el: DoneRecipesType, index) => (
        <Card key={ index }>
          <Link to={ `/${el.type}s/${el.id}` }>
            <ImageCard
              src={ el.image }
              alt={ el.name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Infos>
            <TitleInfos>
              <Link to={ `/${el.type}s/${el.id}` }>
                <Name
                  data-testid={ `${index}-horizontal-name` }
                >
                  {el.name}
                </Name>
                <CateroryType data-testid={ `${index}-horizontal-top-text` }>
                  {el.type === 'drink'
                    ? `${el.alcoholicOrNot} - ${el.category}`
                    : `${el.nationality} - ${el.category}`}
                </CateroryType>
              </Link>

              <ButtonShare
                data-testid="share-button"
                onClick={ () => handleClickShare(el.id, el.type) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="Share"
                />
              </ButtonShare>
              {message && <p data-testid="message">{ message }</p>}
            </TitleInfos>
            <p data-testid={ `${index}-horizontal-done-date` }>
              { new Date(el.doneDate).toLocaleDateString('pt-BR') }
            </p>

            {el.tags && el.tags.map((tag: any, tagIndex: any) => (
              <span
                key={ tagIndex }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ))}
          </Infos>
        </Card>
      ))}
    </DoneRecipesCard>
  );
}

export default DoneCard;
