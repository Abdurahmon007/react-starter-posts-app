import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
const Post = ({ id, userId, title, description }) => {
 
  return (
    <li className="posts-list__item">
      <Link to={`/${userId}/${id}`} className='posts-list__link'>
        <h3 className="posts-list__item-heading">
          {userId}.{id} {title}
        </h3>
        <p className="posts-list__item-desc">{description}</p>
      </Link>
    </li>
  );

};

export default Post;
