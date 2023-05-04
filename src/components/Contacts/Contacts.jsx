import { useDispatch, useSelector } from 'react-redux';
import { visible } from '../../redux/selectors';
import { deleteContacts } from 'redux/options';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visible);

  return (
    <>
      <ul className="ml-5">
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className="mb-2">
              {name}: {number}
              <button
                className="ml-3 bg-red-400 rounded-md p-0.5 font-light hover:bg-red-600 hover:text-white hover:shadow-lg"
                type="button"
                onClick={() => {
                  dispatch(deleteContacts(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
