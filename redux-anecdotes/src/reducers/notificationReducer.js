import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    addNotification(state, action) {
      return action.payload;
    },
    deleteNotification() {
      return '';
    }
  }
});

export const { addNotification, deleteNotification } =
  notificationSlice.actions;

let timeoutID = 0;

export const setNotification = (message, second) => {
  return async (dispatch) => {
    dispatch(addNotification(message));
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      dispatch(deleteNotification());
    }, second * 1000);
  };
};

export default notificationSlice.reducer;
