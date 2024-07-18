import React, { useState } from 'react';
import axios from 'axios';
import './comment.css';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5555/comment/commentlist', { comment });
      if (response.status === 201) {
        setAlertMessage('Comment submitted successfully');
      } else {
        setAlertMessage('Failed to submit comment');
      }
      setComment('');
    } catch (error) {
      setAlertMessage('Failed to submit comment');
      console.error('Error submitting comment', error);
    }
  };

  return (
    <div className="comment-container">
      <h2>Leave a Comment</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
    </div>
  );
};

export default Comment;
