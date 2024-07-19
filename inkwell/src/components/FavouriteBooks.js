// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FavouriteBooks = () => {
//   const [favouriteBooks, setFavouriteBooks] = useState([]);
//   const [formData, setFormData] = useState({ user_id: '', book_id: '', title: '' });

//   useEffect(() => {
//     fetchFavouriteBooks();
//   }, []);

//   const fetchFavouriteBooks = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5555/favourite/favouritelist');
//       setFavouriteBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching favourite books', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5555/favourite/favouritelist', formData);
//       fetchFavouriteBooks();
//       setFormData({ user_id: '', book_id: '', title: '' });
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error('Error adding favourite book', error);
//       toast.error('Failed to add favourite book');
//     }
//   };

//   return (
//     <div>
//       <h2>Favourite Books</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="user_id"
//           placeholder="User ID"
//           value={formData.user_id}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="number"
//           name="book_id"
//           placeholder="Book ID"
//           value={formData.book_id}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           value={formData.title}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Add Favourite Book</button>
//       </form>
//       <ul>
//         {favouriteBooks.map(book => (
//           <li key={book.id}>
//             <h3>{book.title}</h3>
//             <p>User ID: {book.user_id}</p>
//             <p>Book ID: {book.book_id}</p>
//           </li>
//         ))}
//       </ul>
//       <ToastContainer />
//     </div>
//   );
// };

// export default FavouriteBooks;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavouriteBooks = () => {
  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [formData, setFormData] = useState({ user_id: '', book_id: '', title: '' });

  useEffect(() => {
    fetchFavouriteBooks();
  }, []);

  const fetchFavouriteBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/favourite/favouritelist');
      setFavouriteBooks(response.data);
    } catch (error) {
      console.error('Error fetching favourite books', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5555/favourite/favouritelist', formData);
      fetchFavouriteBooks();
      setFormData({ user_id: '', book_id: '', title: '' });
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error adding favourite book', error);
      toast.error('Failed to add favourite book');
    }
  };

  return (
    <div>
      <h2>Favourite Books</h2>
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
          required
        />
        <button type="submit">Add Favourite Book</button>
      </form>
      <ul>
        {favouriteBooks.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>User ID: {book.user_id}</p>
            <p>Book ID: {book.book_id}</p>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default FavouriteBooks;



