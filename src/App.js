import { TodoList } from './components/TodoList/TodoList';
import { Routes, Route } from 'react-router-dom';
import { getPosts } from './api/api';
import { useState } from 'react';
import { UserPost } from './components/UserPost/UserPost';
import { UserAlbum } from './components/UserAlbum/UserAlbum';

function App() {
  const [posts,setPosts] = useState([]);
  const [modalActive,setModalActive] = useState(false);

  const getPost = async (userId) => {
    const peopleServer = await getPosts(userId);
    // console.log(peopleServer);
    setPosts(peopleServer);
    console.log(posts);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoList getPosts={getPost} setActive={setModalActive}/>} />

        <Route path="/users/:userId" element={<UserPost posts={posts} />} />

      {/* <Route path="/tabs/" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
    <UserAlbum 
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}

export default App;
