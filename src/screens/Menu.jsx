import React, { useEffect, useState } from "react";

export const Menu = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <div className=" text-[50px] h-100 bg-lime-600 ">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>You. clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="cursor-pointer"
      >
        Click me
      </button>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword("");
          }}
        />
      </form>
    </div>
  );
};

// use state vs variable

// 1. form inputs
// 2.  toggle UI element
// 3. counter
// 4. loading
// 5. any. data that changes and affect UI
