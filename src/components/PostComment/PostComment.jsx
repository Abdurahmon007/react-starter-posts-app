import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import "./PostComment.css"

const PostComment = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [post, setPost]=useState([]);
  const [comments, setComments]=useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(res=>res.json())
    .then(data => setPost(data))
  }, [params.postId]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
    .then(res => res.json())
    .then(data => setComments(data));
  },[params.postId]);

  return (
    <div>
      <button onClick={() => navigate(`/${params.userId}`, { replace: true })}>back</button>
      <Post
        title = {post.title}
        description={post.body}
      />
      {comments.length > 0 && <ul className='comments'>
        {comments.map(comment =>(
          <Comment 
          name={comment.name}
          body = {comment.body}
          key={comment.id}/>
        ))}
      </ul>}
    </div>
  );
};

export default PostComment;