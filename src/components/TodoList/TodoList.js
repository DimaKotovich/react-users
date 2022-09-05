import { useEffect,useState } from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { getUser } from '../../api/api';
import { useDispatch,useSelector } from 'react-redux';
import './TodoList.scss';


export const TodoList = ({ setActive }) => {

  const dispatch = useDispatch();
  const users = useSelector(
    state => state.users.users
  );

  useEffect(() => {
    dispatch(getUser());
  },[dispatch]);

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
