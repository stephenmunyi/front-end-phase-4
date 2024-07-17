// //BookDetails.jsx//
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { BOOK_DETAILS_URL, COMMENT_URL } from '../API';

// const BookDetail = () => {
//   const [book, setBook] = useState({});
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`${BOOK_DETAILS_URL}/${id}`)
//       .then(response => {
//         setBook(response.data);
//         setComments(response.data.comments || []);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const handleAddComment = () => {
//     axios.post(`${COMMENT_URL}/commentlist`, { book_id: id, text: newComment })
//       .then(response => {
//         setComments([...comments, response.data]);
//         setNewComment('');
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="book-details">
//       <div className="book-image">
//         <h2>{book?.title}</h2>
//         <img src={book?.image_url} alt={book?.title} />
//       </div>
//       <div className='book-description'>
//         <h2>Description</h2>
//         <p>{book?.description}</p>
//         <h2>Author</h2>
//         <p>{book?.author}</p>
//         <h2>Comments</h2>
//         <div className="comments">
//           {comments.map((comment, index) => (
//             <p key={index}>{comment.text}</p>
//           ))}
//           <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
//           <button onClick={handleAddComment}>Add Comment</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookDetail;






// src/components/BookDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL, COMMENT_URL } from '../API';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(response => {
        setBook(response.data);
        setComments(response.data.comments || []);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleAddComment = () => {
    axios.post(`${COMMENT_URL}`, { book_id: id, text: newComment })
      .then(response => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt={book?.title} />
      </div>
      <div className='book-description'>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Author</h2>
        <p>{book?.author}</p>
        <h2>Comments</h2>
        <div className="comments">
          {comments.map((comment, index) => (
            <p key={index}>{comment.text}</p>
          ))}
          <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
