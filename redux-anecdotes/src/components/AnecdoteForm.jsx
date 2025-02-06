import React from 'react';
import { useDispatch } from 'react-redux';
import { createForAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const create = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(createForAnecdote(newAnecdote));
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
