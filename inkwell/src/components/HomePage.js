import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import BorrowedBooks from './BorrowedBooks';
import FavoriteBooks from './FavoriteBooks';
import Comment from './Comments';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

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

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <nav>
        <Link to="/borrowed">Borrowed Books</Link>
        <Link to="/favorite">Favorite Books</Link>
        <Link to="/comment">Leave a Comment</Link>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </nav>
      <h2>Book List</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => handleViewDetails(book)}>View Details</button>
          </li>
        ))}
      </ul>

      {selectedBook && (
        <div>
          <h2>{selectedBook.title}</h2>
          <p>{selectedBook.author}</p>
          {/* Render other details of the selected book */}
        </div>
      )}

      <Route path="/borrowed" component={BorrowedBooks} />
      <Route path="/favorite" component={FavoriteBooks} />
      <Route path="/comment" component={Comment} />
    </div>
  );
};

export default HomePage;
