import DoneFilter from '../../components/DoneRecipes/DoneFilter/DoneFilter';
import DoneCard from '../../components/DoneRecipes/DoneCard/DoneCard';
import useDoneRecipes from '../../hooks/useDoneRecipes';
import { ContainerDoneRecipes, MessageEmpty } from './Styles';
import useShare from '../../hooks/useShare';

function DoneRecipes() {
  const { filteredRecipes, setFilter } = useDoneRecipes();
  const { handleClickShare, message } = useShare();

  return (
    <ContainerDoneRecipes>
      <DoneFilter setFilter={ setFilter } />

      {filteredRecipes.length === 0 && (
        <MessageEmpty>Done recipes is empty!</MessageEmpty>
      )}

      <DoneCard
        filteredRecipes={ filteredRecipes }
        handleClickShare={ handleClickShare }
        message={ message }
      />
    </ContainerDoneRecipes>
  );
}

export default DoneRecipes;
