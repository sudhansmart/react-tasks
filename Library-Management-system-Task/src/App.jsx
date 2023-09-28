  import { useState } from 'react'
  import './App.css'
  import Header from './components/Header'
  import {Navbar,Container,Nav,NavbarBrand} from 'react-bootstrap';
  import HomePage from './components/HomePage';
  import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
  import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';
import AuthorsList from './components/AuthorsList';
import Footer from './components/Footer';

  function App() {
    // Initialize your book state here
    const [books, setBooks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
     // Initialize your  Author state here
     const [authors, setAuthors] = useState([]);
     const [editAuthorIndex, setEditAuthorIndex] = useState(null);

    // Function to add a book
    const addBook = (book) => {
      console.log('Adding book:', book);
      setBooks([...books, book]);
    };
    // Function to edit a book
    const editBook = (index, updatedBook) => {
      console.log('Editing book at index', index, 'with data:', updatedBook);
      const updatedBooks = [...books];
      updatedBooks[index] = updatedBook;
      setBooks(updatedBooks);
      console.log(updatedBooks)
    };
     // Function to delete a book
  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };
     // Function to add a Author
     const addAuthor = (author) => {
      console.log('Adding Author:', author);
      setAuthors([...authors, author]);
    };
     // Function to edit a Author
     const editAuthor = (index, updatedAuthor) => {
      console.log('Editing Author at index', index, 'with data:', updatedAuthor);
      const updatedAuthors = [...authors];
      updatedAuthors[index] = updatedAuthor;
      setAuthors(updatedAuthors);
      console.log("updated edit");
      console.log(updatedAuthors);
    };
      // Function to delete a Author
  const deleteAuthor = (authorindex) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(authorindex, 1);
    setAuthors(updatedAuthors);
    
  };
    return (
      <>
      
      <Router> 
      <Header/>
        <Routes>
            <Route path="/"  element={<HomePage/>}/> 
            <Route path="/Addbook" element={<AddBook onAdd={addBook} onEdit={editBook} editIndex={editIndex}/>}/>
            <Route
            path="/BookList"
            element={<BookList books={books} onEdit={editBook} onDelete={deleteBook} setEditIndex={setEditIndex}/>}
            />
            <Route path="/AddAuthor" element={<AddAuthor onAdd={addAuthor} onEdit={editAuthor} editAuthorIndex={editAuthorIndex}/>}/>
            <Route
            path="/AuthorsList"
            element={<AuthorsList authors={authors} onEdit={editAuthor} onDelete={deleteAuthor}setEditAuthorIndex={setEditAuthorIndex}/>}
            />
        </Routes>
    </Router>
    <Footer/>  
      </>
    
    
  
        
  
    )
  }

  export default App
