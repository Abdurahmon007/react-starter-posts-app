import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import "./Posts.css"
const Posts = () => {

  const params = useParams();
  const userId = params.userId;

  const [userPosts, setUserPosts]=useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => {
      const filteredPosts = data.filter(element => element.userId === Number(userId));
      setUserPosts(filteredPosts)
    })
  },[userId])
  
  return (
    <div>
      <h2 className='posts-title'>User Posts</h2>
      {userPosts.length>0 && <ul className='posts-list'>
          {userPosts.map(item => 
            <Post
              key={item.id}
              userId = {item.userId}
              id = {item.id}
              description = {item.body}
              title = {item.title}
            />
          )}
        </ul>}
    </div>
  );
};

export default Posts;