import axios from 'axios';

axios.defaults.baseURL =
  'https://64521f05a2860c9ed4027695.mockapi.io/contacts/';

export const getContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};
export const postContacts = async contact => {
  const { data } = await axios.post(`contacts`, contact);
  return data;
};
export const removeContacts = async contactsId => {
  const { data } = await axios.delete(`contacts/${contactsId}`);
  return data;
};
