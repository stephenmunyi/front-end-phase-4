// //App.js//
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AppProvider } from './components/context/appContext'; // Ensure correct path to AppProvider
// import BookList from './components/BookList';
// import BookDetail from './components/BookDetail';
// import ProfileList from './components/ProfileList';
// import Favorites from './components/Favorites';
// import BookBorrowed from './components/BookBorrowed';
// import './App.css';

// function App() {
//   return (
//     <AppProvider> {/* Wrap your entire application with AppProvider */}
//       <Router> {/* Use Router as the outermost wrapper */}
//         <Routes> {/* Define your routes */}
//           <Route path="/" element={<BookList />} /> {/* Default route */}
//           <Route path="/books/:id" element={<BookDetail />} /> {/* Route with parameter */}
//           <Route path="/profiles" element={<ProfileList />} /> {/* Route to profile list */}
//           <Route path="/favorites" element={<Favorites />} /> {/* Route to favorites */}
//           <Route path="/borrowed" element={<BookBorrowed />} /> {/* Route to borrowed books */}
//         </Routes>
//       </Router>
//     </AppProvider>
//   );
// }

// export default App;











src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import ProfileList from './components/ProfileList';
import Favorites from './components/Favorites';
import BookBorrowed from './components/BookBorrowed';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppProvider } from './context/appContext';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/borrowed-books" element={<BookBorrowed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
