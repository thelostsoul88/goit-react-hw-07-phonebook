import { toast } from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContacts,
  removeContacts,
} from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
  try {
    return getContacts();
  } catch (error) {
    toast.error(`Error - ${error.message}. Oops something wrong.`);
  }
});

export const addContacts = createAsyncThunk('contacts/addContact', contact => {
  try {
    return postContacts(contact);
  } catch (error) {
    toast.error(`Error - ${error.message}. Oops something wrong.`);
  }
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  contactsId => {
    try {
      return removeContacts(contactsId);
    } catch (error) {
      toast.error(`Error - ${error.message}. Oops something wrong.`);
    }
  }
);

const contactsFuncArr = [fetchContacts, addContacts, deleteContacts];
export const status = type => contactsFuncArr.map(el => el[type]);
