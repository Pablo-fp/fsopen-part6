import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
};

const vote = async (id) => {
  const anecdote = await axios.get(`${baseUrl}/${id}`);
  const updatedAnecdote = { ...anecdote.data, votes: anecdote.data.votes + 1 };
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote);
  return response.data;
};

export default { getAll, createNew, vote };
