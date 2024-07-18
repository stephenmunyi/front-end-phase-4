import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Adjust the import path as necessary

const LandingPage = () => {
  return (
    <div id="landing-page">
      <h1>Welcome to Inkwell Bookstore</h1>
      <p>Explore our collection of books and enjoy reading!</p>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
        <Link to="/borrowed-books">
          <h3>Borrowed Books</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
