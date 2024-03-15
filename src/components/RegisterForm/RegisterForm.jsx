import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css'
import { Formik, Form, Field} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useId } from "react";
import * as Yup from 'yup';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const userName = useId();
    const userEmail = useId();
    const userPassword = useId();

    const validationScheme = Yup.object().shape({
      email: Yup.string().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm).min(3, 'Too short!').max(50, 'Too long!'),
      password: Yup.string().min(3, 'Too short!').max(30, 'Too long!')
  });


  return (

    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationScheme}
      onSubmit={(values, actions) => { 
          const id = uuidv4();
          dispatch(register({id: id, ...values }));
          actions.resetForm();
    }}
      >
        <Form className={css.regForm}>
        <label htmlFor={userName}> Username:</label>
        <Field type="text" name="name" id={userName} className={css.input}/>

        <label htmlFor={userEmail}>Email:</label>
        <Field type="email" name="email" id={userEmail} className={css.input}/>

        <label htmlFor={userPassword}>Password:</label>
        <Field type="password" name="password" id={userPassword} className={css.input}/>

        <button type="submit">Register</button>
      
        </Form>
    </Formik>
  );
};