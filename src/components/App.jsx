import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { getContact } from '../redux/selectors';
import { fetchContacts } from 'redux/options';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import Loader from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {!error && (
        <>
          <h1 className="mt-16 mb-1 text-2xl font-mono font-bold">Phonebook</h1>
          <Form />
        </>
      )}
      {!items.length && !error && (
        <h2 className="text-2xl font-mono font-bold">
          No contacts in phonebook!
        </h2>
      )}
      {items.length > 0 && (
        <>
          <h2 className="text-2xl font-mono font-bold">Contacts</h2>
          <Filter />
        </>
      )}
      {isLoading && !error && <Loader />}
      <ContactList />
      <Toaster />
    </>
  );
};

export default App;
