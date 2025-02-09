import React, { useState } from 'react';
import { useNotification } from '../context/NotificationContext';

const AnecdoteForm = ({ onCreateAnecdote }) => {
  const { dispatch } = useNotification();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: 'Anecdote must be at least 5 characters long'
      });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
      return;
    }
    onCreateAnecdote({ content, votes: 0 });
    event.target.anecdote.value = '';
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={handleSubmit}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
