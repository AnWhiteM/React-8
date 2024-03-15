import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  
    return (
        
        <div className={css.contactBlock}>
            
            <ul>
                <li><p>{contact.name}</p></li>
                <li><p>{contact.number}</p></li>
            </ul>

            <button onClick={handleDelete} className={css.deleteButton}>Delete</button>
        </div>
        
    )

    
}