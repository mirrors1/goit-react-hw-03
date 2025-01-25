import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

const ContactForm = ({ newContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  const PatternPhone = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;
  const PatternonlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'The name must contain more than 3 characters')
      .max(50, 'The name must contain up to 50 characters')
      .required('This field is required')
      .matches(PatternonlyLetters, 'Enter only letters'),
    number: Yup.string()
      .required('This field is required')
      .min(7, 'The number must contain at least 7 characters')
      .max(9, 'The number must contain up to 9 characters')
      .matches(PatternPhone, 'Number format ХХХ-ХХ-ХХ, ХХХХХХХ'),
  });
  const handleSubmit = (values, action) => {
    newContact(values);
    action.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.field} type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={s.label}>
            Number
            <Field className={s.field} type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default ContactForm;
