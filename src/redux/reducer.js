import { toast } from 'react-hot-toast';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContacts, deleteContacts, fetchContacts, status } from './options';

const fetchContactReducer = ({ contacts }, { payload }) => {
  contacts.items = payload;
};

const addContactReducer = ({ contacts }, { payload }) => {
  contacts.items.some(
    contact => contact.name.toLowerCase() === payload.name.toLowerCase().trim()
  )
    ? toast.error(`${payload.name} is already in the contact`)
    : contacts.items.push(payload);
};

const deleteContactReducer = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(contact => contact.id !== payload.id);
};

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

export const phonebookSlicer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactReducer)
      .addCase(addContacts.fulfilled, addContactReducer)
      .addCase(deleteContacts.fulfilled, deleteContactReducer)
      .addMatcher(isAnyOf(...status('pending')), handlePending)
      .addMatcher(isAnyOf(...status('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...status('rejected')), handleRejected),
});
export const { filterContact } = phonebookSlicer.actions;
export const phonebookReducer = phonebookSlicer.reducer;
