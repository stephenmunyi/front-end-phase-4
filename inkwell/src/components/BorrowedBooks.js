import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/borrowed/borrowedlist');
        setBorrowedBooks(response.data);
      } catch (error) {
        console.error('Error fetching borrowed books', error);
      }
    };

    fetchBorrowedBooks();
  }, []);

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>User ID: {book.user_id}</p>
            <p>Book ID: {book.book_id}</p>
            <p>Borrowed Date: {book.borrowed_date}</p>
            <p>Return Date: {book.return_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;