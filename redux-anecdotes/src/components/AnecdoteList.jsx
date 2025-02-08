import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

const Anecdote = (props) => {
  const dispatch = useDispatch();
  const vote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5));
  };
  return (
    <>
      <div>{props.anecdote.content}</div>
      <div>
        has {props.anecdote.votes}
        <button onClick={() => vote(props.anecdote)}>vote</button>
      </div>
    </>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <Notification />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <Anecdote anecdote={anecdote} />
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
