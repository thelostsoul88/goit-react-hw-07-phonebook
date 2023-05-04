import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContacts,
  removeContacts,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts();
});

export const addContacts = createAsyncThunk('contacts/addContact', contact => {
  return postContacts(contact);
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  contactsId => {
    return removeContacts(contactsId);
  }
);

const contactsFuncArr = [fetchContacts, addContacts, deleteContacts];
export const status = type => contactsFuncArr.map(el => el[type]);
