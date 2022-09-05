import { TodoList } from './components/TodoList/TodoList';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserPost } from './components/UserPost/UserPost';
import { UserAlbum } from './components/UserAlbum/UserAlbum';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import userReducer from './api/api';

const store = configureStore(
  {
    reducer: {
      users: userReducer
    }
  }
);

function App() {
  const [modalActive,setModalActive] = useState(false);

  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<TodoList setActive={setModalActive}/>} />

          <Route path="/users/:userId" element={<UserPost/>} />

          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
        <UserAlbum 
            active={modalActive}
            setActive={setModalActive}
        />
      </Provider>
    </div>
  );
}

export default App;
