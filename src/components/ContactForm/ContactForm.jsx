import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage} from 'formik';
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

const initialValues = {
  name: '',
  number: '',
};


export const ContactForm = () => {
  const userNameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

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
      <h2>Add contact</h2>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor={userNameId}>Name:</label>
        <ErrorMessage name="name" component="span"/>
        <Field type="text" name="name" id={userNameId} />

        <label htmlFor={numberId}>Number:</label>
        <ErrorMessage name="number" component="span" />
        <Field type="phone" name="number" id={numberId} />

        <button type="submit">Add</button>
      </Form>
    </Formik>
    </div>
  );
};