import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';
const BookList = ({ books, onEdit, onDelete, setEditIndex }) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  const handleEditClick = (index, book) => {
    setEditedIndex(index);
    setEditedBook({ ...book });
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedBook({});
    setEditIndex(null);
  };

  const handleUpdate = (index) => {
    onEdit(index, editedBook);
    handleCancelEdit();
  };

  return (
    <div className='booklist'>
       <h2>
           <FontAwesomeIcon icon={faList} />
          <span style={{ color: '  rgb(238,202,220,1)' }}>Book List</span>
      </h2> 
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedBook.title}
                    onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                  />
                ) : (
                  book.title
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedBook.author}
                    onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                  />
                ) : (
                  book.author
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedBook.isbn}
                    onChange={(e) => setEditedBook({ ...editedBook, isbn: e.target.value })}
                  />
                ) : (
                  book.isbn
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedBook.publicationDate}
                    onChange={(e) => setEditedBook({ ...editedBook, publicationDate: e.target.value })}
                  />
                ) : (
                  book.publicationDate
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <>
                    <button  className="btn btn-primary " onClick={() => handleUpdate(index)}>Update</button>
                    <button  className="btn btn-danger " onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button   className="btn btn-primary " onClick={() => handleEditClick(index, book)}>Edit</button>
                    <button  className="btn btn-danger " onClick={() => onDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
