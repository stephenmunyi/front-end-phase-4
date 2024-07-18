// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Route, Routes, Link } from 'react-router-dom'; // Ensure correct imports
// import BorrowedBooks from './BorrowedBooks';
// import FavoriteBooks from './FavoriteBooks';
// import Comment from './Comments';
// import './HomePage.css'; // Ensure you have a corresponding CSS file for styles

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5555/book/booklist');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching books', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <header>
//         <h1>Welcome to Inkwell Bookstore</h1>
//       </header>
//       <nav className="navigation">
//         <Link to="/borrowed">Borrowed Books</Link>
//         <Link to="/favorite">Favorite Books</Link>
//         <Link to="/comment">Leave a Comment</Link>
//         <button onClick={() => alert('Displaying activity logs...')}>Activity Logs</button>
//         <input
//           type="text"
//           placeholder="Search books..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </nav>
//       <h2>Book List</h2>
//       <ul>
//         {filteredBooks.map(book => (
//           <li key={book.id}>
//             <h3>{book.title}</h3>
//             <p>{book.author}</p>
//             <Link to={`/book/${book.id}`}>View Details</Link>
//           </li>
//         ))}
//       </ul>

//       <Routes>
//         <Route path="/borrowed" element={<BorrowedBooks />} />
//         <Route path="/favorite" element={<FavoriteBooks />} />
//         <Route path="/comment" element={<Comment />} />
//       </Routes>
//     </div>
//   );
// };

// export default HomePage;
// HomePage.js
// HomePage.js
import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import BorrowedBooks from './BorrowedBooks';
import FavoriteBooks from './FavoriteBooks';
import Comment from './Comments';
import './HomePage.css';

class HomePage extends Component {
  state = {
    books: [],
    searchTerm: ''
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/book/booklist');
      this.setState({ books: response.data });
    } catch (error) {
      console.error('Error fetching books', error);
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    const { books, searchTerm } = this.state;
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <header>
          <h1>Welcome to Inkwell Bookstore</h1>
        </header>
        <nav className="navigation">
          <Link to="/borrowed" className="nav-borrowed">Borrowed Books</Link>
          <Link to="/favorite" className="nav-favorite">Favorite Books</Link>
          <Link to="/comment" className="nav-comment">Leave a Comment</Link>
          <button onClick={() => alert('Displaying activity logs...')}>Activity Logs</button>
        </nav>
        <SearchBar searchTerm={searchTerm} onSearch={this.handleSearch} />
        <h2>Book List</h2>
        <BookList books={filteredBooks} />
        <Routes>
          <Route path="/borrowed" element={<BorrowedBooks />} />
          <Route path="/favorite" element={<FavoriteBooks />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </div>
    );
  }
}

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search books..."
        value={this.props.searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

class BookList extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
