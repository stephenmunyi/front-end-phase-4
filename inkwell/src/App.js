import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import BorrowedBooks from './components/BorrowedBooks';
import FavouriteBooks from './components/FavouriteBooks';
import Comment from './components/Comments';

const App = () => {
  return (
    <Routes>
      
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/home" element={ <HomePage />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/favourite" element={<FavouriteBooks />} />
        <Route path="/comment" element={<Comment />} />
    
    </Routes>
  );
};

export default App;
