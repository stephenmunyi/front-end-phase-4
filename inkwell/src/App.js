import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import BorrowedBooks from './components/BorrowedBooks';
import FavouriteBooks from './components/FavouriteBooks';
import Comment from './components/Comments';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/borrowed" element={<BorrowedBooks />} />
      <Route path="/favourite" element={<FavouriteBooks />} />
      <Route path="/comment" element={<Comment />} />
    </Routes>
  );
};

export default App

// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import HomePage from './components/HomePage';
// import BorrowedBooks from './components/BorrowedBooks';
// import FavouriteBooks from './components/FavouriteBooks';
// import Comment from './components/Comments';
// import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider } from './components/AuthContext';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
//         <Route path="/borrowed" element={<ProtectedRoute element={<BorrowedBooks />} />} />
//         <Route path="/favourite" element={<ProtectedRoute element={<FavouriteBooks />} />} />
//         <Route path="/comment" element={<ProtectedRoute element={<Comment />} />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;

