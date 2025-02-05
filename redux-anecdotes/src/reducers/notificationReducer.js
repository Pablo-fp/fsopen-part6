import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome to the Anecdote app!',
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification() {
      return '';
    }
  }
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
