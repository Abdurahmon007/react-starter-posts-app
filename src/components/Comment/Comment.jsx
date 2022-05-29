import React from 'react';
import "./Comment.css"
const Comment = ({name, body}) => {
  return (
    <li className='comments__item'>
      <h3>{name}</h3>
      <p>{body}</p>
    </li>
  );
};

export default Comment;