import React, { useContext, useEffect, useState } from "react";
import getAllUsers from "../services/users.api";
import { Navigate } from "react-router-dom";
import { Context } from "../context/useContext";




function Users() {
  // const [loggedIn,setLoggedIn]= useContext(LoginContext)

  const data=useContext(Context)
  console.log(data);
  const [data1, setData1] = useState([]);

  async function getData() {
    const myData = await getAllUsers();
    setData1(myData);
  }
  useEffect(() => {
    getData();
  }, []);
 
  return (
    <div>
 
      <button>Logout</button>
      {data1.map((user) => {
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
