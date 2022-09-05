import React from 'react';
import './UserAlbum.scss';
import { useSelector } from 'react-redux';
import Album from '../../image/albums.png'
import Close from '../../image/close.png'

export const UserAlbum = ({ active,setActive }) => {

  const albums = useSelector(
    state => state.users.albums
  );

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <img
          className="modal__close"
          src={Close}
          alt="IconAlbum"
          onClick={() => setActive(false)}
        />
        {albums.map(album => (
          <ul className='album'>
            <li className='album__item' key={album.id}>
              <div className='album__block'>
                <img
                  className="album__block--image"
                  src={Album}
                  alt="IconAlbum"
                />
                <span>{album ? album.title : null}</span>
              </div>
            </li>
          </ul>
        ))}
      </div> 
    </div>
  );
};