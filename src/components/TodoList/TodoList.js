import { useEffect,useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { getUser } from '../../api/api';
import './TodoList.scss';


export const TodoList = ({ getPosts,setActive }) => {

  const [users,setUsers] = useState([]);

  const getData = async () => {
    const peopleServer = await getUser();
    setUsers(peopleServer);
    console.log(peopleServer)
  };


  useEffect(() => {
    getData();
  },[]);

  return (
    <ul className="TodoList">
      {users.map(user => (
        <li className="TodoList__items" key={user.id}>
          <UserInfo
            user={user}
            getPosts={getPosts}
            setActive={setActive}
          />
        </li>
      ))}
  </ul>
  )
};
