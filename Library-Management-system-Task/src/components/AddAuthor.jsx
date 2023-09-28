import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddAuthor = ({onAdd, onEdit, editAuthorIndex}) => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Author name is required'),
    birthDate: Yup.date()
      .required('Birth date is required')
      .max(new Date(), 'Birth date cannot be in the future'),
    biography: Yup.string().required('Biography is required'),
  });

  const handleSubmit = (values,{resetForm}) => {
    if (editAuthorIndex !== null) {
        // Editing an existing AuthorList
        onEdit(editAuthorIndex, values);
        console.log("Authoredit is run");
      } else {
        // Adding a new Author 
        onAdd(values);
        console.log('Author data:', values);
        resetForm({values:""})
      }
    };
  return (
    <div className="addAuthor">
      <h2 className="mb-4"  style={{ fontFamily: 'sans-serif', color: 'maroon'} }>Add Author</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Author's Name:</label>
            <Field type="text" className="form-control"  id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">Birth Date:</label>
            <Field type="date" className="form-control"  id="birthDate" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" className="error" />
          </div>

          <div className="mb-3">
            <label htmlFor="biography" className="form-label">Biography:</label>
            <Field as="textarea"  className="form-control"  id="biography" name="biography" />
            <ErrorMessage name="biography" component="div" className="error" />
          </div>

          <div>
            <button  className="btn btn-primary " type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAuthor;
