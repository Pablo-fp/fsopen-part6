import { useSelector, useDispatch } from 'react-redux';
import { getId } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const voteForAnecdote = (id) => {
    dispatch({
      type: 'VOTE',
      payload: { id }
    });
  };

  const vote = (id) => {
    console.log('vote', id);
    voteForAnecdote(id);
  };

  const createForAnecdote = (content) => {
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: {
        content,
        id: getId(),
        votes: 0
      }
    });
  };

  const create = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    createForAnecdote(content);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
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
