import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';
import { Formik, Form, Field} from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(3, 'Phone number must be at least 3 characters')
    .max(50, 'Phone number must be less than 50 characters'),
});


export const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };
  

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={css.formBlock}>
      <h2>Add New Contact</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        
          <Form className={css.form}>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              name="text"
              id={nameId}
            />

            <br />

            <label htmlFor={phoneId}>Number</label>
            <Field
              type="text"
              name="phone"
              id={phoneId}
            />

            <br />

            <button type="submit">Add</button>
          </Form>
       
      </Formik>
    </div>
  );
}
