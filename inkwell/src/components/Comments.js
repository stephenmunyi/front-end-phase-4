// import React, { useState } from 'react';
// import axios from 'axios';
// import './comment.css';

// const Comment = () => {
//   const [comment, setComment] = useState('');
//   const [alertMessage, setAlertMessage] = useState('');

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5555/comment/commentlist', { comment });
//       if (response.status === 201) {
//         setAlertMessage('Comment submitted successfully');
//       } else {
//         setAlertMessage('Failed to submit comment');
//       }
//       setComment('');
//     } catch (error) {
//       setAlertMessage('Failed to submit comment');
//       console.error('Error submitting comment', error);
//     }
//   };

//   return (
//     <div className="comment-container">
//       <h2>Leave a Comment</h2>
//       <form className="comment-form" onSubmit={handleSubmit}>
//         <textarea
//           value={comment}
//           onChange={handleCommentChange}
//           placeholder="Write your comment here..."
//           rows="4"
//           cols="50"
//         />
//         <br />
//         <button type="submit">Submit Comment</button>
//       </form>
//       {alertMessage && <div className="alert-message">{alertMessage}</div>}
//     </div>
//   );
// };

// export default Comment;


//new line of code

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ user_id: '', book_id: '', text: '', name: 'Anonymous' });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/comments', formData);
      fetchComments();
      setFormData({ user_id: '', book_id: '', text: '', name: 'Anonymous' });
      toast.success('Comment added successfully!');
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error('Failed to add comment');
    }
  };

  const handleUpdate = async (id, updatedText, updatedName) => {
    try {
      await axios.put(`/comments/${id}`, { text: updatedText, name: updatedName });
      fetchComments();
      toast.success('Comment updated successfully!');
    } catch (error) {
      console.error('Error updating comment:', error);
      toast.error('Failed to update comment');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/comments/${id}`);
      fetchComments();
      toast.success('Comment deleted successfully!');
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast.error('Failed to delete comment');
    }
  };

  return (
    <div>
      <h1>Comments</h1>
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
          name="text"
          placeholder="Comment Text"
          value={formData.text}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <button type="submit">Add Comment</button>
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text} - {comment.name}</p>
            <button onClick={() => handleUpdate(comment.id, 'Updated text', 'Updated name')}>Update</button>
            <button onClick={() => handleDelete(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default Comments;
