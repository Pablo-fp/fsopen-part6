import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// const initialState = '';

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// };

// export const setFilter = (filter) => {
//   return {
//     type: 'SET_FILTER',
//     filter
//   };
// };

// export default filterReducer;
