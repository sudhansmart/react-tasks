import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddBook = ({onAdd, onEdit, editIndex}) => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };
  
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });
 
  const handleSubmit = (values,{resetForm}) => {
    if (editIndex !== null) {
        // Editing an existing book
        onEdit(editIndex, values);
        console.log("onedit is run");
      } else {
        // Adding a new book
        onAdd(values);
        console.log('Form data:', values);  
        resetForm({values:""})  
      }
      
  };
 

  return (
    <div className="addBook">
      <h2 className="mb-4"  style={{ fontFamily: 'sans-serif', color: 'maroon' }}>Add a Book</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Field type="text" className="form-control" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <Field type="text" className="form-control" id="author" name="author" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <div className="mb-3">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <Field type="text" className="form-control" id="isbn" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>

          <div className="mb-3">
            <label htmlFor="publicationDate" className="form-label">
              Publication Date
            </label>
            <Field type="date" className="form-control" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
          </div>

          <button type="submit" className="btn btn-primary " >Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBook;
