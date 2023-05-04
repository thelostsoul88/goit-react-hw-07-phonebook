import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterContact } from '../../redux/reducer';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = useSelector(selectFilter);
  const filterId = nanoid();

  return (
    <div className="ml-5 flex flex-col">
      <label htmlFor={filterId} className="text-s mt-2 font-mono font-bold">
        Find contacts by name
      </label>
      <input
        id={filterId}
        onChange={e => dispatch(filterContact(e.currentTarget.value.trim()))}
        name="filter"
        type="text"
        value={handleFilter}
        autoComplete="off"
        className="mt-2 mb-2 pl-1 max-w-xs rounded border border-cyan-700 focus:border-cyan-500 focus:shadow-lg outline-none"
      />
    </div>
  );
};

export default Filter;
