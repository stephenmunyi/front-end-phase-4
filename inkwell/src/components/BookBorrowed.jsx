// import React from 'react';
// import { AppProvider, useAppContext } from '../context/appContext';


// const BookBorrowed = () => {
//   const { borrowedBooks, returnBook } = useAppContext();

//   return (
//     <div className="borrowed-books">
//       {borrowedBooks.length > 0 ? (
//         borrowedBooks.map((book) => (
//           <div key={book.id} className='book'>
//             <h4>{book.title}</h4>
//             <img src={book.image_url} alt={book.title} />
//             <button onClick={() => returnBook(book.id)}>Return Book</button>
//           </div>
//         ))
//       ) : (
//         <h1>You don't have any borrowed books yet.</h1>
//       )}
//     </div>
//   );
// };

// export default BookBorrowed;

// //BookBorrowed.jsx//
// import React from "react";
// import { useAppContext } from "./context/appContext"; // Ensure the correct path and case sensitivity

// const BookBorrowed = () => {
//   const { borrowedBooks, returnBook } = useAppContext();

//   return (
//     <div className="borrowed-books">
//       {borrowedBooks.length > 0 ? (
//         borrowedBooks.map((book) => (
//           <div key={book.id} className="book">
//             <h4>{book.title}</h4>
//             <img src={book.image_url} alt={book.title} />
//             <button onClick={() => returnBook(book.id)}>Return Book</button>
//           </div>
//         ))
//       ) : (
//         <h1>You don't have any borrowed books yet.</h1>
//       )}
//     </div>
//   );
// };

// export default BookBorrowed;








// src/components/BookBorrowed.jsx
import React from "react";
import { useAppContext } from "../context/appContext";

const BookBorrowed = () => {
  const { borrowedBooks, returnBook } = useAppContext();

  return (
    <div className="borrowed-books">
      {borrowedBooks.length > 0 ? (
        borrowedBooks.map((book) => (
          <div key={book.id} className="book">
            <h4>{book.title}</h4>
            <img src={book.image_url} alt={book.title} />
            <button onClick={() => returnBook(book.id)}>Return Book</button>
          </div>
        ))
      ) : (
        <h1>You don't have any borrowed books yet.</h1>
      )}
    </div>
  );
};

export default BookBorrowed;
