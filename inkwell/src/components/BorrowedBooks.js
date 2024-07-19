// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BorrowedBooks = () => {
//   const [borrowedBooks, setBorrowedBooks] = useState([]);

//   useEffect(() => {
//     const fetchBorrowedBooks = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5555/borrowed/borrowedlist');
//         setBorrowedBooks(response.data);
//       } catch (error) {
//         console.error('Error fetching borrowed books', error);
//       }
//     };

//     fetchBorrowedBooks();
//   }, []);

//   return (
//     <div>
//       <h2>Borrowed Books</h2>
//       <ul>
//         {borrowedBooks.map(book => (
//           <li key={book.id}>
//             <h3>{book.title}</h3>
//             <p>User ID: {book.user_id}</p>
//             <p>Book ID: {book.book_id}</p>
//             <p>Borrowed Date: {book.borrowed_date}</p>
//             <p>Return Date: {book.return_date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BorrowedBooks;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [formData, setFormData] = useState({
    user_id: '',
    book_id: '',
    title: '',
    borrowed_date: '',
    return_date: ''
  });

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const fetchBorrowedBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/borrowed/borrowedlist');
      setBorrowedBooks(response.data);
    } catch (error) {
      console.error('Error fetching borrowed books', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5555/borrowed/borrowedlist', formData);
      fetchBorrowedBooks();
      setFormData({ user_id: '', book_id: '', title: '', borrowed_date: '', return_date: '' });
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error adding borrowed book', error);
      toast.error('Failed to add borrowed book');
    }
  };

  return (
    <div>
      <h2>Borrowed Books</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="user_id"
          placeholder="User ID"
          value={formData.user_id}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="book_id"
          placeholder="Book ID"
          value={formData.book_id}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="borrowed_date"
          placeholder="Borrowed Date"
          value={formData.borrowed_date}
          onChange={handleInputChange}
          required
        />
        <input
          type="datetime-local"
          name="return_date"
          placeholder="Return Date"
          value={formData.return_date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Borrowed Book</button>
      </form>
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
      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;