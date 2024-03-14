import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/contacts/selectors';
import { filterByName } from '../../redux/contacts/filtersSlice';

export const SearchBox = () => {
  const searchName = useId();
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filterByName(value.trim() || ''));
  };
  const value = useSelector(selectFilters);

  return (
    <div>
      <label htmlFor={searchName}>Find contacts by name</label>
      <input
        type="text"
        name="search"
        id={searchName}
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
}