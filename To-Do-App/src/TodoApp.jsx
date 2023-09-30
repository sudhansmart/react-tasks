import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
function TodoApp() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1); 


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
    if (name.trim() === '' || description.trim() === '') {
      return; // Prevent adding empty tasks
    }

    const newTodo = {
      name: name,
      description: description,
      status: 'Not Completed',
    };

    setTodos([...todos, newTodo]);
    setName('');
    setDescription('');
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    const todo = todos[index];
    setName(todo.name);
    setDescription(todo.description);
  };
  const handleSaveEdit = () => {
    if (editingIndex === -1) {
      return;
    }
    const updatedTodos = [...todos];
    updatedTodos[editingIndex].name = name;
    updatedTodos[editingIndex].description = description;

    setTodos(updatedTodos);
    setEditingIndex(-1);
    setName('');
    setDescription('');
  };
  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setName('');
    setDescription('');
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.status === 'Completed';
    if (filter === 'notcompleted') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div className='container'>
      <div className='title'><h1>Hello...!Welcome...</h1>
      </div>
      <div className='field'>
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input  
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        {editingIndex === -1?(
        <button  className='btn btn-primary' onClick={handleAddTodo}    >Add</button>
        ):(<>
            <button className='btn btn-primary'  onClick={handleSaveEdit}>Save</button>
            <button className='btn btn-danger'  onClick={handleCancelEdit}>Cancel</button>
          </>)}
      </div>
      <div>
        <label style={{color:"white"}}>Status Filter:</label>
        <Form.Select aria-label="Default select example exp-md  " onChange={(e) => setFilter(e.target.value)} style={{ width: 'auto' }}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </Form.Select>
      </div>
      <div className='main'>
        {filteredTodos.map((todo, index) => (
          <div key={index} className="todo-card">
             <div className="card">
            <p className='sub'>Name :<span className="card-text">{todo.name}</span></p>
            <p className='sub'>Description:<span className="card-text" >{todo.description}</span></p>
            <div className="status-select">
              <label className="status-label">Status:</label>
              <select
               className="status-select"
                value={todo.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            {editingIndex === index ? (
                 <>
                 <button className="edit-button" onClick={() => handleSaveEdit(index)}>Save</button>
                 <button className="delete-button" onClick={() => handleCancelEdit(index)}>Cancel</button>
               </>
             ) : (
                <>
            <button className="edit-button"  onClick={() => handleEditTodo(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </>)}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
