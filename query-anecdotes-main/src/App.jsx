import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { createAnecdote, getAnecdotes, updateAnecdote } from './requests';
import {
  NotificationProvider,
  useNotification
} from './context/NotificationContext';

const App = () => {
  const queryClient = useQueryClient();
  const { dispatch } = useNotification();

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  });

  const addAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Anecdote created!' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
    }
  });

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
      dispatch({ type: 'SET_NOTIFICATION', payload: 'Anecdote voted!' });
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
    }
  });

  const addAnecdote = (anecdote) => {
    addAnecdoteMutation.mutate(anecdote);
  };

  const handleVote = (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    };
    updateAnecdoteMutation.mutate(updatedAnecdote);
  };

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const anecdotes = result.data;

  // const anecdotes = [
  //   {
  //     content: 'If it hurts, do it more often',
  //     id: '47145',
  //     votes: 0
  //   }
  // ];

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm onCreateAnecdote={addAnecdote} />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AppWrapper = () => (
  <NotificationProvider>
    <App />
  </NotificationProvider>
);

export default AppWrapper;
