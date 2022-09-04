import React from 'react';
import './UserAlbum.scss';

export const UserAlbum = ({ active,setActive }) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <button onClick={() => setActive(false)}>Close</button>
      </div> 
    </div>
  );
};