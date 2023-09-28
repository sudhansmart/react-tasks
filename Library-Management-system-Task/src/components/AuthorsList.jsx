import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const AuthorList = ({ authors, onEdit, onDelete, setEditAuthorIndex }) => {
  const [editedAuthors, setEditedAuthors] = useState({});
  
  const handleEditClick = (index, author) => {
    setEditedAuthors({ ...editedAuthors, [index]: { ...author } });
    setEditAuthorIndex(index);
  };

  const handleCancelEdit = (index) => {
    setEditedAuthors({ ...editedAuthors, [index]: undefined });
    setEditAuthorIndex(null);
  };

  const handleUpdate = (index) => {
    onEdit(index, editedAuthors[index]);
    handleCancelEdit(index);
  };

  return (
    <div className='authorlist'>
      <h2>
        <FontAwesomeIcon icon={faList} />
        <span style={{ color: ' rgb(238,202,220,1)' }}>Authors List</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Biography</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>
                {editedAuthors[index] !== undefined ? (
                  <input
                    type="text"
                    value={editedAuthors[index].name}
                    onChange={(e) => setEditedAuthors({
                      ...editedAuthors,
                      [index]: { ...editedAuthors[index], name: e.target.value }
                    })}
                  />
                ) : (
                  author.name
                )}
              </td>
              <td>
                {editedAuthors[index] !== undefined ? (
                  <input
                    type="text"
                    value={editedAuthors[index].birthDate}
                    onChange={(e) => setEditedAuthors({
                      ...editedAuthors,
                      [index]: { ...editedAuthors[index], birthDate: e.target.value }
                    })}
                  />
                ) : (
                  author.birthDate
                )}
              </td>
              <td>
                {editedAuthors[index] !== undefined ? (
                  <input
                    type="text"
                    value={editedAuthors[index].biography}
                    onChange={(e) => setEditedAuthors({
                      ...editedAuthors,
                      [index]: { ...editedAuthors[index], biography: e.target.value }
                    })}
                  />
                ) : (
                  author.biography
                )}
              </td>
              <td>
                {editedAuthors[index] !== undefined ? (
                  <>
                    <button className="btn btn-primary" onClick={() => handleUpdate(index)}>Update</button>
                    <button className="btn btn-danger" onClick={() => handleCancelEdit(index)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEditClick(index, author)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => onDelete(index)}>Delete</button>
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

export default AuthorList;
