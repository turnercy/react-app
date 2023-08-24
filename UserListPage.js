import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, removeUser } from "./redux/userActions";

function UserListPage() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleEditUser = (userId, newName, newAge) => {
    dispatch(updateUser(userId, newName, newAge));
  };

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              value={user.name}
              onChange={(e) =>
                handleEditUser(user.id, e.target.value, user.age)
              }
            />
            <input
              value={user.age}
              onChange={(e) =>
                handleEditUser(user.id, user.name, e.target.value)
              }
            />
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;
