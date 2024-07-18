// api.js
export const API_URL = 'http://localhost:5555/book/booklist';
export const BOOK_DETAILS_URL = 'http://localhost:5555/book';
export const PROFILE_URL = 'http://localhost:5555/profile';
export const FAVOURITE_URL = 'http://localhost:5555/favourite';
export const COMMENT_URL = 'http://localhost:5555/comment';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

export const loginUser = async (data) => {
  const response = await fetch(`${PROFILE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const getBooks = async () => {
  const response = await fetch(API_URL);
  return handleResponse(response);
};

export const getBookById = async (id) => {
  const response = await fetch(`${BOOK_DETAILS_URL}/${id}`);
  return handleResponse(response);
};

export const getUserProfile = async (id) => {
  const response = await fetch(`${PROFILE_URL}/${id}`);
  return handleResponse(response);
};

export const updateUserProfile = async (id, data) => {
  const response = await fetch(`${PROFILE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const getFavorites = async (userId) => {
  const response = await fetch(`${FAVOURITE_URL}/${userId}`);
  return handleResponse(response);
};

export const addFavorite = async (data) => {
  const response = await fetch(FAVOURITE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const getComments = async (bookId) => {
  const response = await fetch(`${COMMENT_URL}/${bookId}`);
  return handleResponse(response);
};

export const addComment = async (data) => {
  const response = await fetch(COMMENT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};
