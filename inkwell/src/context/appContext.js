import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5555/login', { email, password });
      // Example: setUserData(response.data.user);
      // Example: setToken(response.data.token);
      return response.data; // Return data as needed
    } catch (error) {
      console.error('Login error:', error.message);
      throw error; // Re-throw the error to handle it in the component
    }
  };

  const addFavorites = (book) => {
    setFavorites(prevFavorites => [...prevFavorites, book]);
  };

  const removeFavorites = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(book => book.id !== id));
  };

  const borrowBook = (book) => {
    setBorrowedBooks(prevBorrowed => [...prevBorrowed, book]);
  };

  const returnBook = (id) => {
    setBorrowedBooks(prevBorrowed => prevBorrowed.filter(book => book.id !== id));
  };

  return (
    <AppContext.Provider value={{ favorites, borrowedBooks, addFavorites, removeFavorites, borrowBook, returnBook, login }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
