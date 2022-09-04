import React from 'react';
import Email from '../../image/email.png'
import './UserPost.scss';
import Completed from '../../image/completed.png';


export const UserPost = ({ posts }) => {
  console.log(posts);
  return (
    <div className="commentInfo">
      <div className="commentInfo__item">
        <img
          className="userInfo__image"
          src="https://img.icons8.com/ios/50/000000/document--v1.png"
          alt="BodyImage"
        />
        <span className="commentInfo__item-text">
          {/* {comment.body} */}
        </span>
      </div>

      <div className="commentInfo__item">
        <img
          className="userInfo__image"
          src={Completed}
          alt="CompletedImage"
        />
        <span className="commentInfo__item-text">
          {/* {comment.body} */}
        </span>
      </div>

      <div
        className="commentInfo__item commentInfo__item--email"
        data-cy="comment-email"
      >
        <img
          className="userInfo__image"
          src={Email}
          alt="IconEmail"
        />
        <p className="commentInfo__item-text">
          {/* {comment.email} */}
        </p>
      </div>
    </div>
  );
};