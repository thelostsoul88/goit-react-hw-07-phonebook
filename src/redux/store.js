import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './reducer';

export const store = configureStore({
  reducer: phonebookReducer,
});
