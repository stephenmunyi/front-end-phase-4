// //BookList.jsx//
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { API_URL } from "../API";
// import { useAppContext } from "./context/appContext"; // Ensure the correct path and case sensitivity
// import { useNavigate } from "react-router-dom";

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const { favorites, addFavorites, removeFavorites, borrowBook } =
//     useAppContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((response) => setBooks(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const favoritesChecker = (id) => {
//     return favorites.some((book) => book.id === id);
//   };

//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <div key={book.id} className="book">
//           <div>
//             <h4>{book.title}</h4>
//           </div>
//           <div>
//             <img
//               src={book.image_url}
//               alt={book.title}
//               onClick={() => navigate(`/books/${book.id}`)}
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//           <div>
//             {favoritesChecker(book.id) ? (
//               <button onClick={() => removeFavorites(book.id)}>
//                 Remove from Favorites
//               </button>
//             ) : (
//               <button onClick={() => addFavorites(book)}>
//                 Add to Favorites
//               </button>
//             )}
//             <button onClick={() => borrowBook(book)}>Borrow Book</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;






// src/components/BookList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../API";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addFavorites, removeFavorites, borrowBook } =
    useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt={book.title}
              onClick={() => navigate(`/books/${book.id}`)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => removeFavorites(book.id)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorites(book)}>
                Add to Favorites
              </button>
            )}
            <button onClick={() => borrowBook(book)}>Borrow Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
