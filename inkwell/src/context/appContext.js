// // src/context/appContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [borrowedBooks, setBorrowedBooks] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const addFavorites = (book) => setFavorites([...favorites, book]);
//   const removeFavorites = (id) => setFavorites(favorites.filter(book => book.id !== id));
//   const borrowBook = (book) => setBorrowedBooks([...borrowedBooks, book]);
//   const returnBook = (id) => setBorrowedBooks(borrowedBooks.filter(book => book.id !== id));

//   return (
//     <AppContext.Provider value={{ borrowedBooks, favorites, addFavorites, removeFavorites, borrowBook, returnBook }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);


// import React, { createContext, useState, useContext } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorites = (book) => {
//     setFavorites([...favorites, book]);
//   };

//   const removeFavorites = (id) => {
//     setFavorites(favorites.filter((book) => book.id !== id));
//   };

//   return (
//     <AppContext.Provider value={{ favorites, addFavorites, removeFavorites }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };





// src/components/context/appContext.js

// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [borrowedBooks, setBorrowedBooks] = useState([]);
  
//   const addFavorites = (book) => setFavorites([...favorites, book]);
  
//   const removeFavorites = (id) => setFavorites(favorites.filter(book => book.id !== id));

//   const borrowBook = (book) => setBorrowedBooks([...borrowedBooks, book]);

//   const returnBook = (id) => setBorrowedBooks(borrowedBooks.filter(book => book.id !== id));

//   const login = (email, password) => {
//     // Implement login functionality
//   };

//   return (
//     <AppContext.Provider value={{
//       favorites,
//       borrowedBooks,
//       addFavorites,
//       removeFavorites,
//       borrowBook,
//       returnBook,
//       login
//     }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);

// src/components/context/appContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5555/login', { email, password });
    // Handle login response (e.g., set user data, token, etc.)
  };

  const addFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFavorites = (id) => {
    setFavorites(favorites.filter(book => book.id !== id));
  };

  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  const returnBook = (id) => {
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== id));
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