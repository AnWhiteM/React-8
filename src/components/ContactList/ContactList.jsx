import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from '../../redux/selectors';


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter(contact => {
    const normalizedFilter = filter.toLowerCase();
    return contact && contact.text && contact.text.toLowerCase().includes(normalizedFilter);
  });

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}