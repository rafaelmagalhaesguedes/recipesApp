import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import RecipesContext from '../context/RecipesContext';
import {
  fetchSearchByIngredients,
  fetchSearchByName,
  fetchSearchFirtsLetter,
} from '../helpers/api';

function useSearch(page: string) {
  const {
    searchData,
    setSearchData,
    setSearch, loading, updateLoading } = useContext(RecipesContext);
  const [formData, setFormData] = useState({
    search: '',
    filter: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, search: value });
    }
  };

  const handleSubmit = async () => {
    const { filter, search } = formData;
    let fetchResult = [];

    updateLoading(true);

    switch (filter) {
      case 'ingredient':
        fetchResult = await fetchSearchByIngredients(page, search);
        break;

      case 'name':
        fetchResult = await fetchSearchByName(page, search);
        break;

      case 'first-letter':
        if (search.length > 1) {
          Swal.fire({
            icon: 'error',
            timer: 3500,
            title: 'Oops...',
            text: 'Your search must have only 1 (one) character',
          });
          setFormData({ ...formData, search: '' });
        }
        fetchResult = await fetchSearchFirtsLetter(page, search);
        break;

      default:
        break;
    }

    updateLoading(false);

    if ('meals' in fetchResult) {
      setSearchData(fetchResult.meals || []);
    } else if ('drinks' in fetchResult) {
      setSearchData(fetchResult.drinks || []);
    } else {
      setSearchData([]);
    }
    setSearch(formData.search);
    setFormData({ ...formData, search: '' });
  };

  return {
    formData, handleChange, handleSubmit, searchData, loading };
}

export default useSearch;
