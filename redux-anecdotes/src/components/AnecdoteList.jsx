import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Notification from './Notification';

// Anecdote component represents a single anecdote item
const Anecdote = (props) => {
  const dispatch = useDispatch();

  // Function to handle voting for an anecdote
  const vote = async (anecdote) => {
    dispatch(voteAnecdote(anecdote.id)); // Dispatch vote action
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5)); // Dispatch notification action
  };

  return (
    <>
      <div>{props.anecdote.content}</div> {/* Display anecdote content */}
      <div>
        has {props.anecdote.votes} {/* Display number of votes */}
        <button onClick={() => vote(props.anecdote)}>vote</button>{' '}
        {/* Button to vote for the anecdote */}
      </div>
    </>
  );
};

// AnecdoteList component represents the list of anecdotes
const AnecdoteList = () => {
  // Select anecdotes from the Redux store and filter them based on the filter state
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <Notification />
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      ))}
    </div>
  );
};

export default AnecdoteList;
