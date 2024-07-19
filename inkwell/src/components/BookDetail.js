// // src/components/BookDetail.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const BookDetail = () => {
//   const { id } = useParams();
//   const [bookDetail, setBookDetail] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5555/bookdetail/${id}`)
//       .then(response => response.json())
//       .then(data => setBookDetail(data))
//       .catch(error => console.error('Error fetching book details:', error));
//   }, [id]);

//   if (!bookDetail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{bookDetail.title}</h2>
//       <p><strong>Author:</strong> {bookDetail.author}</p>
//       <p><strong>Description:</strong> {bookDetail.description}</p>
//       <p><strong>Genre:</strong> {bookDetail.genre}</p>
//       <p><strong>Publication Year:</strong> {bookDetail.publication_year}</p>
//     </div>
//   );
// };

// export default BookDetail;
