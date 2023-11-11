import DoneFilter from '../../components/DoneRecipes/DoneFilter/DoneFilter';
import DoneCard from '../../components/DoneRecipes/DoneCard/DoneCard';
import useDoneRecipes from '../../hooks/useDoneRecipes';
import {
  ContainerDoneRecipes,
  Wrapper,
} from './Styles';
import useShare from '../../hooks/useShare';

function DoneRecipes() {
  const { filteredRecipes, setFilter } = useDoneRecipes();
  const { handleClickShare, message } = useShare();

  return (
    <ContainerDoneRecipes>
      <Wrapper>
        <DoneFilter setFilter={ setFilter } />
        <DoneCard
          filteredRecipes={ filteredRecipes }
          handleClickShare={ handleClickShare }
          message={ message }
        />
      </Wrapper>
    </ContainerDoneRecipes>
  );
}

export default DoneRecipes;
