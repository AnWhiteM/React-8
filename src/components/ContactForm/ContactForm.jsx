// ContactForm.js
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

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


export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    text: '',
    phone: '',
  };

  const handleSubmit = (values, { resetForm }) => {
      const newContact = { ...values, id: nanoid() };
      dispatch(addContact(newContact));
      resetForm();
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
