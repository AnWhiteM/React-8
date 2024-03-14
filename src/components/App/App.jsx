import  ContactList  from '../ContactList/ContactList'
import  SearchBox from '../SearchBox/SearchBox'
import  ContactForm  from '../ContactForm/ContactForm';
import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/selectors.js';
import { fetchContacts } from '../../redux/operations.js';

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  return (
    <>
     <h1>Phonebook</h1>
     <ContactForm />
     <SearchBox  />
     {isLoading && !error && <b>Request in progress</b>}
     <ContactList  />
    </>
  )
}


