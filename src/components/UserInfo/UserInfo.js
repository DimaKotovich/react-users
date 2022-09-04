import React, { useState } from 'react';
import './UserInfo.scss';
import { getPosts,getAlbums } from '../../api/api';
import { NavLink, useParams } from 'react-router-dom';
import Post from '../../image/posts.png'
import Album from '../../image/albums.png'
import Email from '../../image/email.png'


export const UserInfo = ({ user,getPosts,setActive }) => {
  
  const { userId } = useParams();
  // const getPost = async (userId) => {
  //   const peopleServer = await getPosts(userId);
  //   console.log(peopleServer)
  // };

  const getAlbum = async (userId) => {
    const peopleServer = await getAlbums(userId);
    console.log(peopleServer)
    setActive(true);
  };

  return (
    <div className="userInfo">
      <div className='userInfo__wrapper'>
        <img
          className="userInfo__image"
          src="https://img.icons8.com/ios/50/000000/badge.png"
          alt="IconName"
        />
        <p className="userInfo__item">
          {user.name}
        </p>
      </div>
      
      <div className='userInfo__wrapper'>
        <img
          className="userInfo__image"
          src="https://img.icons8.com/ios/50/000000/username.png"
          alt="IconUserName"
        />
        <p className="userInfo__item">
          {user.username}
        </p>
      </div>

      <div className='userInfo__wrapper'>
        <img
          className="userInfo__image"
          src={Email}
          alt="IconEmail"
        />
        <p className="userInfo__item">
          {user ? user.email : null}
        </p>
      </div>
      
      <div className='userInfo__linkBlock'>
        <p className='userInfo__post'>Posts:</p>
        <NavLink
          to={`/users/${user.id}`}
          target="_blank"
        >
          <img
            className="userInfo__image"
            src={Post}
            alt="IconPost"
            onClick={() => getPosts(user.id)}
          />
        </NavLink>

        <p className='userInfo__post'>Albums:</p>
        <img
            className="userInfo__album"
            src={Album}
            alt="IconAlbum"
            onClick={() => getAlbum(user.id)}
        />
      </div>
    </div>
  );
};
