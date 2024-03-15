import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css'
import { useId } from "react";
import { Formik, Form, Field} from 'formik';
import toast from "react-hot-toast";
import * as Yup from 'yup';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const userEmail = useId();
    const userPassword = useId();

    const validationScheme = Yup.object().shape({
        email: Yup.string().matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm).min(3, 'Too short!').max(50, 'Too long!'),
        password: Yup.string().min(3, 'Too short!').max(30, 'Too long!')
    });


  return (
    
      <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationScheme}
            onSubmit={(values, actions) => { 
              dispatch(logIn({ ...values }))
                  .unwrap()
                  .then(() => {})
                  .catch(() => {
                      toast.error('Email or password is incorrect, try again')
                  })
              actions.resetForm();
          }}
            
        >
            <Form className={css.loginForm}>
                <label htmlFor={userEmail}>Email:</label>
                <Field type="email" name="email" id={userEmail} className={css.input}/>

                <label htmlFor={userPassword}>Password:</label>
                <Field type="password" name="password" id={userPassword} className={css.input}/>

                <button type="submit">Log In</button>
          </Form>
        </Formik>
  );
};