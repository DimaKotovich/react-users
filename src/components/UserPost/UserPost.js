import React from 'react';
import { useEffect } from 'react';
import Completed from '../../image/completed.png';
import { getPosts } from '../../api/api';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './UserPost.scss';
import Mark from '../../image/mark.png';
import Cross from '../../image/cross.png';


export const UserPost = ( ) => {

  const dispatch = useDispatch();
  const userid = useParams();
  const posts = useSelector(
    state => state.users.posts
  );
  
  useEffect(() => {
    dispatch(getPosts(userid.userId));
  },[dispatch]);

  return (
    <ul className='posts'>
      {posts.map(post => (
          <li className='posts__items' key={post.id}>
            <div className="commentInfo">
              <div className="commentInfo__item">
                <img
                  className="userInfo__image"
                  src="https://img.icons8.com/ios/50/000000/document--v1.png"
                  alt="BodyImage"
                />
                <span className="commentInfo__item-text">
                  {post ? post.title : null}
                </span>
              </div>

              <div className="commentInfo__item">
                <img
                  className="userInfo__image userInfo__image--completed"
                  src={Completed}
                  alt="CompletedImage"
                />
                <span className="commentInfo__item-text">
                  {post.completed 
                  ?
                  <img
                    className="userInfo__image"
                    src={Mark}
                    alt="Mark"
                  />
                  : 
                  <img
                    className="userInfo__cross"
                    src={Cross}
                    alt="Cross"
                  />}
                </span>
              </div>
            </div>
          </li>
      ))}
    </ul>
  );
};