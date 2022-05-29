import React from 'react';
import {Link} from 'react-router-dom'
import "./User.css"
const User = (props) => {
  
  return (
    <li className='user__item'>
      <Link to={`/${props.userId}`} className='user__link'>
        <h3 className='user__name'>{props.name}</h3>
        <span className='user__email'>{props.email}</span>
      </Link>
    </li>
  );
};

export default User;