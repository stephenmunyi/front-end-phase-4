import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const fetchFavoriteBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/favourite/favouritelist');
        setFavoriteBooks(response.data);
      } catch (error) {
        console.error('Error fetching favorite books', error);
      }
    };

    fetchFavoriteBooks();
  }, []);

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favoriteBooks.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>User ID: {book.user_id}</p>
            <p>Book ID: {book.book_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBooks;