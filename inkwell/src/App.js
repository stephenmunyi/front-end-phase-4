import React from 'react';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import BorrowedBooks from './components/BorrowedBooks';
import FavoriteBooks from './components/FavoriteBooks';
import Comment from './components/Comments';

const App = () => {
  return (
    <Routes>
      
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/home" element={ <HomePage />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/favorite" element={<FavoriteBooks />} />
        <Route path="/comment" element={<Comment />} />
    
    </Routes>
  );
};

export default App;
