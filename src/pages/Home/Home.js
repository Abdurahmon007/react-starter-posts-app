import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostComment from '../../components/PostComment/PostComment';
import Posts from '../../components/Posts/Posts';
import Main from '../Main/Main';
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <Routes>
        <Route path='/:userId' element={<Posts/>} exact />
        <Route path='/' element = {<Main />} exact />
        <Route path='/:userId/:postId' element={<PostComment />} exact/>
      </Routes>
    </div>
  );
};

export default Home;