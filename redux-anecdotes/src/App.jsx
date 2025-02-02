import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote, createForAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const orderedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    console.log('vote', id);
    dispatch(voteForAnecdote(id));
  };

  const create = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createForAnecdote(content));
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
    </div>
  );
};

export default App;
