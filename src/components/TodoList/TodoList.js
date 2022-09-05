import { useEffect,useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { getUser } from '../../api/api';
import { useDispatch,useSelector } from 'react-redux';
import './TodoList.scss';


export const TodoList = ({ setActive }) => {

  // const [users,setUsers] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(
    state => state.users.users
  );
  // const getData = async () => {
  //   const peopleServer = await getUser();
  //   console.log(peopleServer)
  // };


  useEffect(() => {
    dispatch(getUser());
  },[dispatch]);
  console.log(users);

  return (
    <ul className="TodoList">
      {users.map(user => (
        <li className="TodoList__items" key={user.id}>
          <UserInfo
            user={user}
            setActive={setActive}
          />
        </li>
      ))}
  </ul>
  )
};
