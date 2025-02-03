import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Filter anecdotes..."
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Filter;
