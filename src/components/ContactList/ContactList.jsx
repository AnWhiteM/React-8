import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    
    <div>
      <h3>Contact List</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.contactList}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};