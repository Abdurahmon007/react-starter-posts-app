import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Sidebar.css";
const Sidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="sidebar">
      <h1 className="sidebar-heading">Users</h1>
      {users.length > 0 && (
        <ul className="user__list">
          {users.map(user_item => (
            <User
              key={user_item.id}
              userId = {user_item.id}
              name={user_item.name}
              email={user_item.email}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
