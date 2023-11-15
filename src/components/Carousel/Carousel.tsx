import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecommendations } from '../../helpers/api';
import {
  CarouselContainer,
  CarouselTitle, ContainerCarouselDetails, RecommendationCard } from './Style';

interface CarouselProps {
  isDrinksPage: boolean;
}

function Carousel({ isDrinksPage }: CarouselProps) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ContainerCarouselDetails>
      <CarouselTitle>Recommended</CarouselTitle>
      <CarouselContainer>
        {recommendations && recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={ recommendation.idDrink || recommendation.idMeal }
            data-testid={ `${index}-recommendation-card` }
          >
            <Link
              to={ recommendation.idMeal ? `/meals/${recommendation.idMeal}`
                : `/drinks/${recommendation.idDrink}` }
              onClick={ scrollToTop }
            >
              <img
                src={ recommendation.strDrinkThumb || recommendation.strMealThumb }
                alt="recipe"
              />
              <h3 data-testid={ `${index}-recommendation-title` }>
                {recommendation.strDrink || recommendation.strMeal}
              </h3>
            </Link>
          </RecommendationCard>
        ))}
      </CarouselContainer>
    </ContainerCarouselDetails>
  );
}

export default Carousel;
