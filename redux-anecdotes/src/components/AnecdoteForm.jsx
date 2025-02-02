import React from 'react';
import { useDispatch } from 'react-redux';
import { createForAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const create = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createForAnecdote(content));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input
            name="anecdote"
            type="text"
            style={{ width: '99vw', boxSizing: 'border-box', padding: '10px' }}
            placeholder="Introduce your anecdote here..."
          />
        </div>
        <button>create</button>
      </form>
      ;
    </div>
  );
};

export default AnecdoteForm;
