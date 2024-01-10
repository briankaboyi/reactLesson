import React, { useContext, useEffect, useState } from "react";
import getAllUsers from "../services/users.api";
import { LoginContext } from "../App";
import { Navigate } from "react-router-dom";
import UseContextProvider from "../context/useContext";

function Users() {
  // const [loggedIn,setLoggedIn]= useContext(LoginContext)
  const { data1 } = useContext(UseContextProvider);
  console.log(data1);
  const [data, setData] = useState([]);

  async function getData() {
    const myData = await getAllUsers();
    setData(myData);
  }
  useEffect(() => {
    getData();
    console.log("checking login status");
  }, []);
  if (!loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <button onClick={() => setLoggedIn(false)}>Logout</button>
      {data.map((user) => {
        return (
          <div
            className="userCard"
            key={user.id}
            style={{ border: "1px solid" }}
          >
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.data}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
