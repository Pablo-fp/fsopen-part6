import React, { useState } from 'react';

const AnecdoteForm = ({ onCreateAnecdote }) => {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    if (content.length < 5) {
      setError('Anecdote must be at least 5 characters long');
      return;
    }
    setError('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AnecdoteForm;
