import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom'; // Ensure correct imports
import BorrowedBooks from './BorrowedBooks';
import FavoriteBooks from './FavoriteBooks';
import Comment from './Comments';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/book/booklist');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Welcome to Inkwell Bookstore</h1>
      <nav className="navigation">
        <Link to="/borrowed" className="nav-borrowed">Borrowed Books</Link>
        <Link to="/favorite" className="nav-favorite">Favorite Books</Link>
        <Link to="/comment" className="nav-comment">Leave a Comment</Link>
        <button className="nav-button" onClick={() => alert('Displaying activity logs...')}>Activity Logs</button>
      </nav>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2>Book List</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/favorite" element={<FavoriteBooks />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </div>
  );
};

export default HomePage;
