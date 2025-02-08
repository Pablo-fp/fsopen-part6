import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { createAnecdote, getAnecdotes } from './requests';

const App = () => {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes
  });
  console.log(JSON.parse(JSON.stringify(result)));

  const addAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
    }
  });

  const addAnecdote = (anecdote) => {
    addAnecdoteMutation.mutate(anecdote);
  };

  const handleVote = (anecdote) => {
    console.log('vote');
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

export default App;
