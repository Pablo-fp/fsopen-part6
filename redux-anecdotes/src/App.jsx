import { useSelector, useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import { voteForAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const orderedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    console.log('vote', id);
    dispatch(voteForAnecdote(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}

      <AnecdoteForm />
    </div>
  );
};

export default App;
