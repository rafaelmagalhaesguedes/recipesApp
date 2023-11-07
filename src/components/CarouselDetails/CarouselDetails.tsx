import { useState, useEffect } from 'react';
import { fetchRecommendations } from '../../helpers/api';
import { ContainerCarouselDetails } from './Style';

interface CarouselDetailsProps {
  isDrinksPage: boolean;
}

function CarouselDetails({ isDrinksPage }: CarouselDetailsProps) {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecommendations(isDrinksPage ? 'drinks' : 'meals');
        setRecommendations(data.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isDrinksPage]);

  return (
    <ContainerCarouselDetails>
      <h2>Recommended</h2>
      <div style={ { overflowX: 'auto', display: 'flex', width: '100%' } }>
        {recommendations.map((recommendation, index) => (
          <div
            key={ recommendation.idDrink || recommendation.idMeal }
            data-testid={ `${index}-recommendation-card` }
            style={ {
              flex: '0 0 auto',
              width: '160px',
              border: '1px solid #ccc',
              margin: '5px',
            } }
          >
            <img
              src={ recommendation.strDrinkThumb || recommendation.strMealThumb }
              alt="recipe"
              width={ 150 }
            />
            <h3 data-testid={ `${index}-recommendation-title` }>
              {recommendation.strDrink || recommendation.strMeal}
            </h3>
          </div>
        ))}
      </div>
    </ContainerCarouselDetails>
  );
}

export default CarouselDetails;
